import React from 'react'
import { useState } from 'react';

const Profile_Interact_Button = () => {
  const [showMenu, setShowMenu] = useState(false)
const handleVisible = () => {
    setShowMenu(!showMenu) }
  return (
    <div>
<div className=" absolute flex ml-2 lg:ml-40 " >
<div className=" inline-block">
  <div>
    <button type="button" className="bg-color-winter-button justify-end items-center inline-flex p-3 rounded-full border border-gray-300 shadow-md  bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:{color-winter-primary}" id="menu-button" aria-expanded="true" aria-haspopup="true" 
    onClick={handleVisible}> <p className='m'>Interact</p>
      {/* <svg className="mt-1 mr-1 ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg> */}
    </button>
  </div>
  {showMenu &&   
  <div className="flex mt-2 w-30 rounded-md drop-shadow-xl  
   bg-white" 
  role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
    <div className="py-1" role="none">
    <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:bg-color-winter-button hover:rounded-md" role="menuitem" tabindex="-1" id="menu-item-0">Duel</a>
    <button type="submit" className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-color-winter-button hover:rounded-md" role="menuitem" tabindex="-1" id="menu-item-1">Wedding</button>
    <button type="submit" className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-color-winter-button hover:rounded-md" role="menuitem" tabindex="-1" id="menu-item-2">Friendship</button>
    <button type="submit" className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-color-winter-button hover:rounded-md" role="menuitem" tabindex="-1" id="menu-item-2">Trade</button>

    </div>
  </div>}
</div>
    </div>
    </div>
  )
}

export default Profile_Interact_Button;