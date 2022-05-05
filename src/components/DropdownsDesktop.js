import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


/* Made a dropdowns because burger menu are used for mobile only */

export const DropdownsDesktop = () => {
/* Using a useState to hide/show the menu*/
const [showMenu, setShowMenu] = useState(false)


const handleVisible = () => {
    setShowMenu(!showMenu)
}

const [character, setCharacter] = useState({});

useEffect(() => {
  axios
      .get(`https://thronesapi.com/api/v2/Characters/2`)
      .then((res) => res.data)
      .then((data) => setCharacter(data));
  }, []);

  return (
    <div className="flex items-row justify-end" >
<div className="relative inline-block text-left">
  <div>
    <button type="button" className="flex justify-center items-center w-14 rounded-full border
     border-gray-300 shadow-sm  bg-white text-sm font-medium text-black hover:bg-gray-50 
     focus:outline-none focus:ring-2 focus:ring-offset-2
      focus:ring-offset-gray-100 focus:{color-winter-primary}" 
      id="menu-button" aria-expanded="true" aria-haspopup="true" 
    onClick={handleVisible}>
      <img src={character.imageUrl} alt='ProfilePicture' className="rounded-full object-fit"/>
    </button>
  </div>
  {showMenu &&    /* It's like if/else */
  <div onMouseLeave={()=> setShowMenu(!showMenu)} className="origin-top-right absolute right-0 mt-2 w-56 rounded-lg shadow-md shadow-color-font-dark  bg-slate-300 ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
    <div className="py-1" role="none">
    <button type="submit" className="text-black block w-full text-left px-4 py-2 text-sm hover:bg-color-winter-header hover:text-color-font-light rounded-lg" role="menuitem" tabindex="-1" id="menu-item-1">My profile</button>
    <a href="#" className="text-black block px-4 py-2 text-sm hover:bg-color-winter-header hover:text-color-font-light rounded-lg" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
    <button type="submit" className="text-black block w-full text-left px-4 py-2 text-sm hover:bg-color-winter-header hover:text-color-font-light rounded-lg" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
    </div>
  </div>}
</div>
    </div>

  )
};
export default DropdownsDesktop