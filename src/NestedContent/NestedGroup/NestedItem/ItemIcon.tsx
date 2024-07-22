import { useContext, useState, useEffect } from 'react';
import { TaskType, TaskContext, TaskFunctionsType, TaskFunctionsContext } from '../../../App';
import '../../../../src/style.css';

const ItemIcon = ({ id }: { id: string }) => {
  const [icon, setIcon] = useState<string>('');

  const context = useContext<TaskType[] | undefined>(TaskContext);
  const functionContext = useContext<TaskFunctionsType | undefined>(TaskFunctionsContext);

  useEffect(() => {
    const handleIcon = () => {
      if (context) {
        const task = context.find(task => task.id === id);
        if (task) {
          setIcon(task.icon);
        }
      }
    };

    handleIcon();
  }, [id, context]);

  if (!functionContext || !context) {
    return null;
  }

  const newIcon = () => {
    functionContext.newRandomIcon(id);
  }

  return (
    <img src={icon} alt="Item Icon" onDoubleClick={newIcon} />
  );
}

export default ItemIcon;
