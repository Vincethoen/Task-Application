import { useContext } from 'react';
import { TaskType, TaskContext } from '../../../App';
import '../../../style.css';

const ItemInput = ({ id }: { id: string; }) => {

  const context = useContext<TaskType[] | undefined>(TaskContext);

  const handleTask = () => {
    if (context === undefined) {
      return null;
    } else {
      const task = context.find(task => task.id === id);
      if (task !== undefined) {
        return task.task;
      }
    }
    return null;
  }

  if (context === undefined) {
    return null;
  }
  return (
    <div className='item-input'>
      {handleTask()}
    </div>
  )
}

export default ItemInput