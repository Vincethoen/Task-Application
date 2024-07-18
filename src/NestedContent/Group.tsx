import { useState, useRef, useEffect, useContext } from 'react';
import { TaskType, TaskContext } from '../App';
import TitleGroup from './NestedGroup/TitleGroup';
import Item from './NestedGroup/Item';
import './../style.css';

const Group = ({ id }: { id: string; }) => {

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
  return (
    <article>
      <TitleGroup
        itemCount={itemCount}
        id={id}
      />
      <ul ref={ulRef}>
        {TasksContext.map(task => (
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