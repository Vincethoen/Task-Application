import React from 'react'
import TitleGroup from './NestedGroup/TitleGroup';
import Item from './NestedGroup/Item';

const Group = () => {
  return (
    <>
      <TitleGroup />
      <ul>
          <Item />
          <Item />
          <Item />
      </ul>
    </>
  )
}

export default Group