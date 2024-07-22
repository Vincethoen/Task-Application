import { useContext } from 'react';
import { TaskType, TaskContext, TaskFunctionsType, TaskFunctionsContext } from '../../../App';
import '../../../style.css';

const ItemStatus = ({ id }: { id: string; }) => {

  const taskContext = useContext<TaskType[] | undefined>(TaskContext);
  const taskFunctionsContext = useContext<TaskFunctionsType | undefined>(TaskFunctionsContext);
  
  if (!taskContext || !taskFunctionsContext) {
    return null;
  }

  const currentItem = taskContext.find(task => task.id === id)

  if (!currentItem) {
    return null;
  }

  return (
    <div className='status-container'>
      <button>
        <img src="../../../src/assets/previous.svg" alt="previous" onClick={() => taskFunctionsContext.decrementTask(currentItem)} />
      </button>
      <button>
        <img src="../../../src/assets/next.svg" alt="next" onClick={() => taskFunctionsContext.incrementTask(currentItem)} />
      </button>
    </div>
  )
}

export default ItemStatus