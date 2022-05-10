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
    <button type="button" className="justify-end items-center inline-flex 
    p-2
    bg-color-winter-button rounded-lg 
    hover:bg-color-winter-header hover:text-color-font-light hover:transition-shadow hover:shadow-sm hover:shadow-color-font-dark 
    shadow-md shadow-color-font-dark" id="menu-button" aria-expanded="true" aria-haspopup="true" 
    onClick={handleVisible}> <p className='lg:font-[font-got]'>Interact</p>
      {/* <svg className="mt-1 mr-1 ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg> */}
    </button>
  </div>
  {showMenu &&   
  <div onMouseLeave={()=> setShowMenu(!showMenu)} className="flex mt-2 rounded-md shadow-md shadow-color-font-dark bg-slate-300" 
  role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
    <div className="p-0" role="none">
    <button href="submit" className="text-gray-700 block w-full p-3 text-left text-sm hover:bg-color-winter-header hover:text-color-font-light hover:rounded-md lg:font-[font-got]" role="menuitem" tabindex="-1" id="menu-item-0">Duel</button>
    <button type="submit" className="text-gray-700 block w-full p-3 text-left text-sm hover:bg-color-winter-header hover:text-color-font-light hover:rounded-md lg:font-[font-got]" role="menuitem" tabindex="-1" id="menu-item-1">Wedding</button>
    <button type="submit" className="text-gray-700 block w-full p-3 text-left text-sm hover:bg-color-winter-header hover:text-color-font-light hover:rounded-md lg:font-[font-got]" role="menuitem" tabindex="-1" id="menu-item-2">Friendship</button>
    <button type="submit" className="text-gray-700 block w-full p-3 text-left text-sm hover:bg-color-winter-header hover:text-color-font-light hover:rounded-md lg:font-[font-got]" role="menuitem" tabindex="-1" id="menu-item-2">Trade</button>

    </div>
  </div>}
</div>
    </div>
    </div>
  )
}

export default Profile_Interact_Button;