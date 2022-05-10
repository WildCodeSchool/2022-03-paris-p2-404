import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const SearchBar = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/users/`, {withCredentials: true})
      .then((res) => res.data)
      .then((data) => {
        setCharacters(data)});
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

  //click outside to close :

  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className="search-container w-6/12 flex flex-col">
      <div className="search-inner relative flex">
        <input
       
          type="text"
          value={value}
          placeholder="Search character..."
          onChange={onChange}
          className="border-0 w-full rounded-2xl px-2 py-1  shadow-inner shadow-color-winter-header "
        />

        <span
          className="search-button text-color-winter-footer absolute h-auto right-1 font-light rounded-full px-2 my-1  border-black hover:text-color-winter-header  "
          // onClick={() => onSearch(value)}
          // button disable to make search simpler and easier. 
          //run search on suggestion click
        >
          <SearchIcon />
        </span>
      </div>
      <div 
       onMouseLeave={()=> setValue('')}
      className="dropdown
      
       my-1 rounded-lg 
       bg-slate-300  border-black  empty:border-0 shadow-md shadow-color-font-dark">
        {characters
          .filter((character) => {
            if (character.full_name) {
            const searchCharacter = value.toLocaleLowerCase();
            const fullName = character.full_name.toLowerCase();
            
            return (
              searchCharacter &&
              fullName.includes(searchCharacter) &&
              fullName !== searchCharacter
            );
            }
          })
          .slice(0, 10) // limit to 10 results
          .map((character, index) => (
            <Link to={`/users/${(character.id)}`} key={index}>
            <div
              onClick={() => onSearch(character.full_name)}
              
              key={index}
              className="dropdown-row rounded-lg p-1 cursor-pointer  hover:bg-color-winter-header hover:text-color-font-light"
            >
              {character.full_name}
            </div>
            </Link>
          ))}
      </div>
    </div>
  );
};
