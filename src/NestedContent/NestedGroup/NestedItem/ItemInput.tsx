import { useContext, useState, useEffect, ChangeEvent } from 'react';
import { TaskType, TaskContext, TaskFunctionsType, TaskFunctionsContext } from '../../../App';
import '../../../style.css';

const ItemInput = ({ id }: { id: string; }) => {
  const [text, setText] = useState<string>('');
  const [edit, setEdit] = useState<boolean>(false);

  const context = useContext<TaskType[] | undefined>(TaskContext);
  const functionContext = useContext<TaskFunctionsType | undefined>(TaskFunctionsContext);

  useEffect(() => {
    if (!edit) {
      if (text === '') {
        setText(getText)
      }
    }
    }, [text])
    
  const getText = () => {
    if (!context) {
      return '';
    }
    const task = context.find(task => task.id === id);  
    if (task) {
      return task.task;
    }
    return '';
  }

  const setNewText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  const setEditMode = () => {
    setEdit(!edit);
  }

  function handleEditTask(e: any) {
    e.preventDefault();
    if (!functionContext) {
      return
    }
    functionContext.editTask( text, id);
    setEditMode();
  }

  
  return (
    <div className='item-input' onDoubleClick={setEditMode}>
      {edit ? (
        <form className="edit-form">
          <input
            type='text'
            value={text}
            onInput={setNewText}
            onBlur={(e) => handleEditTask(e)}
            autoFocus
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleEditTask(e);
              }
            }}
          />
        </form>
      ) : (
        <p>{text}</p>
      )}
    </div>
  );
};

export default ItemInput;
