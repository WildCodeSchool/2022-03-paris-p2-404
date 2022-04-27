import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/fonts/img/logo.png';
import DropdownsDesktop from '../components/DropdownsDesktop';

/* Need to add the routes for Home and Map */

export const Navbar = () => {
  return (
    <div
      className="navbar 
    flex fixed z-40 items-center
    h-1/12 w-screen
    mt-0 
    bg-color-winter-header shadow-color-font-dark shadow-md"
    >
      <div className="flex w-20">
        <img src={Logo} alt='logo' className="w-full h-auto " />
      </div>
      <div className="flex justify-center w-4/5 ml-8">
        <ul className="flex justify-between items-stretch text-white">
          <li className="mx-0 pr-10 pl-10 py-7 w-full h-full font-[font-got] hover:bg-color-winter-hover-desktop-header">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="mx-0 pr-10 pl-10 py-7 w-full h-full font-[font-got] hover:bg-color-winter-hover-desktop-header">
            Map
          </li>
        </ul>
      </div>
      <div className='profilePictureDD absolute mx-4 right-0'>
        <DropdownsDesktop />
      </div>
    </div>
  );
};

export default Navbar;
