import React from 'react';
import JonSnowPic from '../assets/img/jon_snow_pic.jpeg';
import { useState } from 'react';
import { Link } from 'react-router-dom';


/* Made a dropdowns because burger menu are used for mobile only */

export const DropdownsDesktop = () => {
/* Using a useState to hide/show the menu*/
const [showMenu, setShowMenu] = useState(false)

const handleVisible = () => {
    setShowMenu(!showMenu)
}

  return (

/* Need to add the route for profile, winter/summer mode and log out(login page) */

    <div className="flex items-row justify-end" >
<div className="relative inline-block text-left">
  <div>
    <button type="button" className="flex justify-center items-center w-14 rounded-full border
     border-gray-300 shadow-sm  bg-white text-sm font-medium text-black hover:bg-gray-50 
     focus:outline-none focus:ring-2 focus:ring-offset-2
      focus:ring-offset-gray-100 focus:{color-winter-primary}" 
      id="menu-button" aria-expanded="true" aria-haspopup="true" 
    onClick={handleVisible}>
      <img src={JonSnowPic} alt='ProfilePicture' className="rounded-full object-cover"/>
      {/* <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg> */}
    </button>
  </div>
  {showMenu &&    /* It's like if/else */
  <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-lg shadow-md shadow-color-font-dark  bg-slate-300 ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
    <div className="py-1" role="none">
    <button type="submit" className="text-black block w-full text-left px-4 py-2 text-sm hover:bg-color-winter-header hover:text-color-font-light rounded-lg" role="menuitem" tabindex="-1" id="menu-item-1">My Profile</button>
    <a href="#" className="text-black block px-4 py-2 text-sm hover:bg-color-winter-header hover:text-color-font-light rounded-lg" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
    <button type="submit" className="text-black block w-full text-left px-4 py-2 text-sm hover:bg-color-winter-header hover:text-color-font-light rounded-lg" role="menuitem" tabindex="-1" id="menu-item-1">Winter Mode</button>
    <button type="submit" className="text-black block w-full text-left px-4 py-2 text-sm hover:bg-color-winter-header hover:text-color-font-light rounded-lg" role="menuitem" tabindex="-1" id="menu-item-2">Summer Mode</button>
    <Link to="/login"><button type="submit" className="text-black block w-full text-left px-4 py-2 text-sm hover:bg-color-winter-header hover:text-color-font-light rounded-lg" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button></Link>
    </div>
  </div>}
</div>
    </div>

  )
}
export default DropdownsDesktop