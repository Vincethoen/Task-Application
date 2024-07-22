import { useState, useRef, useEffect, useContext } from 'react';
import { TaskType, TaskContext } from '../App';
import TitleGroup from './NestedGroup/TitleGroup';
import Item from './NestedGroup/Item';
import './../style.css';

const Group = ({ id, index }: { id: string; index: number }) => {

  const TasksContext = useContext<TaskType[] | undefined>(TaskContext);

  /* Count items function */
  const [itemCount, setItemCount] = useState<number>(0);
  const ulRef = useRef<HTMLUListElement>(null);
  useEffect(() => {
    if (ulRef.current) {
      setItemCount(ulRef.current.children.length);
    }
  }, [TasksContext]);

  if (!TasksContext) {
    return null;
  }

  const filteredTasks = TasksContext.filter(task => task.groupIndex === index);

  return (
    <article>
      <TitleGroup
        itemCount={itemCount}
        id={id}
      />
      <ul ref={ulRef}>
        {filteredTasks.map(task => (
          <Item
          key={task.id}
          id={task.id}
          />
        ))}
      </ul>
    </article>
  );
};

export default Group;