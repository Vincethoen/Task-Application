import { useContext } from 'react';
import { TaskType, TaskContext } from '../../../App';
import '../../../../src/style.css';

const ItemSubject = ({ id }: { id: string; }) => {

  const context = useContext<TaskType[] | undefined>(TaskContext);

  const handleSubject = () => {
    if (context === undefined) {
      return undefined;
    } else {
      const task = context.find(task => task.id === id);
      if (task !== undefined) {
        return task.subject;
      }
    }
    return undefined;
  }

  return (
    <p className='item-subject'>{handleSubject()}</p>
  );
}

export default ItemSubject;