import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';

export const SearchBar = () => {

    const [characters, setCharacters] = useState([]);
    const url = 'https://thronesapi.com/api/v2/Characters';
  
    useEffect(() => {
      axios
        .get(url)
        .then((res) => res.data)
        .then((data) => setCharacters(data));
    }, []);

  const [value, setValue] = useState('');

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSearch = (searchTerm) => {
      setValue(searchTerm);
    //api to fetch search result
    console.log('search', searchTerm);
  };

  return (
    <div className="search-container w-6/12 flex flex-col">
      <div className="search-inner relative flex">
        <input
          type="text"
          value={value}
          placeholder="Search character..."
          onChange={onChange}
          class="border-0 w-full rounded-2xl px-2 py-1  shadow-inner shadow-color-winter-header "
        />

        <button
          className="search-button text-color-winter-footer absolute h-auto right-1 font-light rounded-full px-2 my-1  border-black hover:text-color-winter-header  "
          onClick={() => onSearch(value)} 
        >
          <SearchIcon/>
        </button>
      </div>
      <div className="dropdown my-1 rounded-lg bg-slate-300  border-black  empty:border-0">
        {characters
        .filter((character) => {
            const searchCharacter = value.toLocaleLowerCase();
            const fullName = character.fullName.toLowerCase();

            return searchCharacter && fullName.startsWith(searchCharacter) && fullName !== searchCharacter;
        })
        .slice(0, 10) // limit to 10 results
        .map((character, index) => (
        <div onClick={()=>onSearch(character.fullName)} key={index} 
        className="dropdown-row rounded-lg p-1 cursor-pointer  hover:bg-color-winter-header hover:text-color-font-light">
            {character.fullName}
        </div>))}
      </div>
    </div>
  );
};
export default SearchBar;