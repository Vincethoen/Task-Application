import React from 'react';
import ItemInput from './NestedItem/ItemInput';
import ItemIcon from './NestedItem/ItemIcon';
import ItemSubject from './NestedItem/ItemSubject';
import ItemStatus from './NestedItem/ItemStatus';

const Item = () => {
  return (
    <>
      <ItemInput />
      <div>
        <ItemIcon />
        <ItemSubject />
        <ItemStatus />
      </div>
    </>
  )
}

export default Item