import React from 'react';
import AddTask from './NestedHeader/AddTask';
import AddGroup from './NestedHeader/AddGroup';
import SearchTask from './NestedHeader/SearchTask';

const Header = () => {
  return (
    <>
      <AddTask />
      <AddGroup />
      <SearchTask />
    </>
  )
}

export default Header