import { useContext, useState } from 'react';
import { TaskFunctionsType, TaskFunctionsContext } from '../App';
import '../style.css';

const SearchTask = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const context = useContext<TaskFunctionsType | undefined>(TaskFunctionsContext);

  if (!context) {
    return null;
  }


  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      context.searchTask(searchTerm.trim());
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchTerm.trim() !== '') {
      context.searchTask(searchTerm.trim());
    }
  };

  return (
    <div className='input-container'>
      <button type="button" onClick={handleSearch}>Search</button>
      <input
        type="text"
        value={searchTerm}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSearchTerm(e.target.value);
        }}
        onKeyDown={handleKeyPress}
        placeholder="text here . . ."
      />
    </div>
  )
}

export default SearchTask