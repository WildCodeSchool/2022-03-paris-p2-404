import React from 'react';

import Navbar from '../components/Navbar';
import { SearchBar } from '../components/SearchBar/SearchBar';
import MobileFooter from '../components/MobileFooter';
import MobileHeader from '../components/MobileHeader';
import { UserPost } from '../components/UserPost';
import NotifUserList from '../components/NotifUserList';
import trumpet from '../assets/icons/trumpet.png';
import throne from '../assets/icons/throne.png';

export const HomePage = () => {
  return (
    <div className="maincontent scrollbar-hide h-screen ">
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <div className='MobileHeader lg:hidden'><MobileHeader/></div>

      {/* for scrollbar show: scrollbar-default */}
      {/* <div className="hidden lg:block navbar row-start-1 row-end-2 sticky "></div> */}

      <div className="w-full flex flex-row justify-center lg:justify-start ">
        
        <div
          className="activityContent 
        col-start-1 col-end-3 row-start-2 row-end-3 lg:col-start-1 lg:col-end-2 flex  flex-col justify-center items-center
         lg:w-2/3 w-full
          pt-36 pl-4 p-4
         "
        >
          <SearchBar />
          <div className="h1notif flex flex-row justify-center items-center my-4">
            <img alt="throne" src={throne} className="w-16 h-16" />
            <h1 className="lg:text-2xl">LATEST ACTIVITY</h1>
          </div>
          <div className="PostList w-full lg:w-8/12">
            {Array.apply(null, {length: ((Math.random()*30)+15)}).map(item => <UserPost />)}
          </div>
        </div>

        <div
          className="notifContent 
        row-start-2 row-end-3 col-start-2 col-end-3 right-0 bottom-0 fixed overflow-auto scrollbar-hide
        h-screen w-1/3 
        ml-4 mt-36 pt-36
        shadow-color-font-dark shadow-lg bg-white
        hidden lg:block  "
        >
          <div className="h1notif flex flex-row justify-center items-center">
            <img alt="trumpet" src={trumpet} className="w-16 h-16" />
            <h1 className=" text-center m-4 lg:text-2xl">NOTIFICATIONS</h1>
          </div>
          <NotifUserList />
        </div>
      </div>
      <div className='
      w-full lg:hidden
      shadow:md shadow-color-font-dark'>
        <MobileFooter/>
        </div>
    </div>
  );
};
