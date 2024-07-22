import { useContext, useState, useEffect, ChangeEvent } from 'react';
import { TaskType, TaskContext, TaskFunctionsType, TaskFunctionsContext } from '../../../App';
import '../../../../src/style.css';

const ItemSubject = ({ id }: { id: string; }) => {
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
      return task.subject;
    }
    return '';
  }

  const setNewText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  const setEditMode = () => {
    setEdit(!edit);
  }

  function handleEditSubject(e: any) {
    e.preventDefault();
    if (!functionContext) {
      return
    }
    functionContext.editTask( text, id);
    setEditMode();
  }

  return (
    <div onDoubleClick={setEditMode}>
      {edit ? (
        <form className="edit-form">
          <input
            type='text'
            value={text}
            onInput={setNewText}
            onBlur={(e) => handleEditSubject(e)}
            autoFocus
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleEditSubject(e);
              }
            }}
          />
        </form>
      ) : (
        <p className='item-subject'>
          {text}
        </p>
      )}
    </div>
  );
}

export default ItemSubject;