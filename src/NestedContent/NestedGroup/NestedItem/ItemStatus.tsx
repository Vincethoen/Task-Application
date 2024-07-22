import { useContext, useState } from 'react';
import { TaskType, TaskContext, TaskFunctionsType, TaskFunctionsContext } from '../../../App';
import '../../../style.css';

const ItemStatus = ({ id }: { id: string; }) => {
  const [currentItem, setCurrentItem] = useState<TaskType | undefined>(undefined);

  const taskContext = useContext<TaskType[] | undefined>(TaskContext);
  const taskFunctionsContext = useContext<TaskFunctionsType | undefined>(TaskFunctionsContext);
  
  if (!taskContext || !taskFunctionsContext) {
    return null;
  }

  if (!currentItem) {
    setCurrentItem(taskContext.find(task => task.id === id));
  }

  const moveItem = (forward: boolean) => {
    if (!currentItem) {
      return;
    }
    if (forward) {
      taskFunctionsContext.decrementTask(currentItem)
    } else {
      taskFunctionsContext.incrementTask(currentItem)
    }    
  }

  return (
    <div className='status-container'>
      <button>
        <img src="../../../src/assets/previous.svg" alt="previous" onClick={() => moveItem(false)} />
      </button>
      <button>
        <img src="../../../src/assets/next.svg" alt="next" onClick={() => moveItem(true)} />
      </button>
    </div>
  )
}

export default ItemStatus