import { useContext, useState, useEffect, ChangeEvent } from 'react';
import { GroupType, GroupContext, GroupFunctionsType, GroupFunctionsContext } from '../../App';
import ItemCount from './NestedTitleGroup/ItemCount';
import './../../style.css';

const TitleGroup = ({ itemCount, id }: { itemCount: number, id: string; }) => {
  const [text, setText] = useState<string>('');
  const [edit, setEdit] = useState<boolean>(false);

  const context = useContext<GroupType[] | undefined>(GroupContext);
  const functionContext = useContext<GroupFunctionsType | undefined>(GroupFunctionsContext)

  useEffect(() => {
    if (!edit) {
      if (text === '') {
        setText(getText)
      }
    }
  }, [text]);

  const getText = () => {
    if (!context) {
      return '';
    }
    const group = context.find(group => group.id === id);
    if (group) {
      return group.name;
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
    functionContext.editGroup(text, id);
    setEditMode();
  }

  const handleGroupName = () => {
    if (context !== undefined) {
      const group = context.find((group) => group.id === id);
      if (group) {
        return group.name;
      }
      return 'Unknown id';
    }
    return 'Unknown name';
  }

  if (!context || !functionContext) {
    return;
  }

  return (
    <div className=''>
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
          <h2>{handleGroupName()}</h2>
        )}
      </div>
      <ItemCount
        amountOfItems={itemCount} />
    </div>
  )
}

export default TitleGroup