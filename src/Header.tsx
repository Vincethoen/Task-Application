import SearchTask from './NestedHeader/SearchTask';
import AddTask from './NestedHeader/AddTask';
import AddGroup from './NestedHeader/AddGroup';
import './style.css';

const Header = () => {
  
  
  return (
    <header>
      <div className='title-container'>
        <h1 className='title'>
          TaskBoard
        </h1>
      </div>
      <div className='btn-container'>
        <AddTask />
        <AddGroup />
        <SearchTask />
      </div>
    </header>
  )
}

export default Header