import { useContext } from 'react';
import { TaskType, TaskContext } from '../../../App';
import '../../../../src/style.css';

const ItemIcon = ({ id }: { id: string; }) => {

  const context = useContext<TaskType[] | undefined>(TaskContext);

  const handleIcon = () => {
    if (context === undefined) {
      return undefined;
    } else {
      const task = context.find(task => task.id === id);
      if (task !== undefined) {
        return task.icon;
      }
    }
    return undefined;
  }

  return (
      <img src={handleIcon()} alt="Item Icon" />
  );
}

export default ItemIcon;