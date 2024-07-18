import ItemInput from './NestedItem/ItemInput';
import ItemIcon from './NestedItem/ItemIcon';
import ItemSubject from './NestedItem/ItemSubject';
import ItemStatus from './NestedItem/ItemStatus';

const Item = ({ id }: { id: string; }) => {
  return (
    <li>
      <ItemInput
        id={id}
      />
      <div className='item-container'>
        <ItemIcon
          id={id}
        />
        <ItemSubject
          id={id}
        />
        <ItemStatus
          id={id}
        />
      </div>
    </li>
  )
}

export default Item