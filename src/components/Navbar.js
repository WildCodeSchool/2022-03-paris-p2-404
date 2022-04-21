import React from 'react';
import Logo from "../assets/fonts/img/logo.png";
import DropdownsDesktop from "../components/DropdownsDesktop"

/* Need to add the routes for Home and Map */

export const Navbar = () => {
  return (
    <div className=" flex bg-color-winter-header h-20 mt-0 w-screen" >
        <div className='flex w-20' >
                <img src={Logo} className="w-20 h-20"/>
        </div>
        <div className='flex justify-center w-4/5 ml-8'>
        <ul className="flex justify-between items-stretch text-white" >
                <li className="mx-0 pr-10 pl-10 py-7 w-full h-full font-[font-got] hover:bg-color-winter-hover-desktop-header">Home</li>
                <li className="mx-0 pr-10 pl-10 py-7 w-full h-full font-[font-got] hover:bg-color-winter-hover-desktop-header">Map</li>
        </ul>
        </div>
        <DropdownsDesktop />
    </div>
  )
}

export default Navbar