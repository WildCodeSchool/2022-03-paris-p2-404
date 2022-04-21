import React from 'react';
import Logo from "../assets/fonts/img/logo.png";

/*Creation of the Navbar (desktop only)*/

export const Navbar = () => {
  return (
    <div className=" flex bg-color-winter-header h-20 mt-0 w-screen" >
        <div className='flex w-20' >
                <img src={Logo} className="w-20 h-20"/>
        </div>
        <div className='flex justify-center w-4/5'>
        <ul className="flex justify-between items-stretch text-white" >
                <li className="mx-0 pr-10 pl-10 py-7 w-full h-full font-[font-got] hover:bg-color-winter-hover-desktop-header">Home</li>
                <li className="mx-0 pr-10 pl-10 py-7 w-full h-full font-[font-got] hover:bg-color-winter-hover-desktop-header">Map</li>
        </ul>
        </div>
    </div>

    /* Import the "S01_menu_burger" in the last div */
  )
}

export default Navbar