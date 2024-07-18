import { useContext } from 'react';
import { GroupType, GroupContext } from '../../App';
import ItemCount from './NestedTitleGroup/ItemCount';
import './../../style.css';

const TitleGroup = ({ itemCount, id }: { itemCount: number, id: string; }) => {

  const context = useContext<GroupType[] | undefined>(GroupContext);

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


  return (
    <div className=''>
      <h2>{handleGroupName()}</h2>
      <ItemCount
        amountOfItems={itemCount} />
    </div>
  )
}

export default TitleGroup