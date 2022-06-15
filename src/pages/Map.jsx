import { Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import React, { useState } from 'react';
import ironthrone from '../assets/img/ironthrone.png';
import dorne from '../assets/img/dorne.png';
import vale from '../assets/img/vale.png';
import gnorth from '../assets/img/gnorth.png';
import river from '../assets/img/river.png';
import north from '../assets/img/north.png';
import reach from '../assets/img/reach.png';
import stormlands from '../assets/img/stormlands.png';
import rock from '../assets/img/rock.png';
import compass from '../assets/icons/compass.png';
import MobileFooter from '../components/MobileFooter';
import MobileHeader from '../components/MobileHeader';
import CloseIcon from '@mui/icons-material/Close';
import { GreatNorthUsersList } from '../components/locations/locationsUsersLists/GreatNorthUserList';
import { NorthUsersList } from '../components/locations/locationsUsersLists/NorthUsersList';
import { MountainAndValeUserList } from '../components/locations/locationsUsersLists/MountainAndValeUserList';
import { IslesAndRiversUsersList } from '../components/locations/locationsUsersLists/IslesAndRiversUsersList';
import { TheRockUsersList } from '../components/locations/locationsUsersLists/TheRockUserList';
import { StormLandsUsersList } from '../components/locations/locationsUsersLists/StormLandsUsersList';
import { TheReachUsersList } from '../components/locations/locationsUsersLists/TheReachUsersList';
import { DorneUsersList } from '../components/locations/locationsUsersLists/DorneUsersList';
import { KingsLandingUsersList } from '../components/locations/locationsUsersLists/KingsLandingUsersList';

export const Map = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const [isVisible5, setIsVisible5] = useState(false);
  const [isVisible6, setIsVisible6] = useState(false);
  const [isVisible7, setIsVisible7] = useState(false);
  const [isVisible8, setIsVisible8] = useState(false);
  const [isVisible9, setIsVisible9] = useState(false);

  const handleVisible = () => {
    setIsVisible(!isVisible);
    setIsVisible2(false);
    setIsVisible3(false);
    setIsVisible4(false);
    setIsVisible5(false);
    setIsVisible6(false);
    setIsVisible7(false);
    setIsVisible8(false);
    setIsVisible9(false);
  };
  const handleVisible2 = () => {
    setIsVisible2(!isVisible2);
    setIsVisible(false);
    setIsVisible3(false);
    setIsVisible4(false);
    setIsVisible5(false);
    setIsVisible6(false);
    setIsVisible7(false);
    setIsVisible8(false);
    setIsVisible9(false);
  };

  const handleVisible3 = () => {
    setIsVisible3(!isVisible3);
    setIsVisible(false);
    setIsVisible2(false);
    setIsVisible4(false);
    setIsVisible5(false);
    setIsVisible6(false);
    setIsVisible7(false);
    setIsVisible8(false);
    setIsVisible9(false);
  };

  const handleVisible4 = () => {
    setIsVisible4(!isVisible4);
    setIsVisible(false);
    setIsVisible2(false);
    setIsVisible3(false);
    setIsVisible5(false);
    setIsVisible6(false);
    setIsVisible7(false);
    setIsVisible8(false);
    setIsVisible9(false);
  };

  const handleVisible5 = () => {
    setIsVisible5(!isVisible5);
    setIsVisible(false);
    setIsVisible2(false);
    setIsVisible3(false);
    setIsVisible4(false);
    setIsVisible6(false);
    setIsVisible7(false);
    setIsVisible8(false);
    setIsVisible9(false);
  };

  const handleVisible6 = () => {
    setIsVisible6(!isVisible6);
    setIsVisible(false);
    setIsVisible2(false);
    setIsVisible3(false);
    setIsVisible4(false);
    setIsVisible5(false);
    setIsVisible7(false);
    setIsVisible8(false);
    setIsVisible9(false);
  };

  const handleVisible7 = () => {
    setIsVisible7(!isVisible7);
    setIsVisible(false);
    setIsVisible2(false);
    setIsVisible3(false);
    setIsVisible4(false);
    setIsVisible5(false);
    setIsVisible6(false);
    setIsVisible8(false);
    setIsVisible9(false);
  };

  const handleVisible8 = () => {
    setIsVisible8(!isVisible8);
    setIsVisible(false);
    setIsVisible2(false);
    setIsVisible3(false);
    setIsVisible4(false);
    setIsVisible5(false);
    setIsVisible6(false);
    setIsVisible7(false);
    setIsVisible9(false);
  };
  const handleVisible9 = () => {
    setIsVisible9(!isVisible9);
    setIsVisible(false);
    setIsVisible2(false);
    setIsVisible3(false);
    setIsVisible4(false);
    setIsVisible5(false);
    setIsVisible6(false);
    setIsVisible7(false);
    setIsVisible8(false);
  };

  return (
    <div className="  ">
      <div className="hidden fixed top-0 lg:block z-50">
        <Navbar />
      </div>
      <div className="MobileHeader lg:hidden top:0">
        <MobileHeader />
      </div>
      <div className=" main mt-32 flex flex-col justify-center items-center h-full">
        {/* /////////////////////////USERSLISTS/////////////////////////// */}
        {isVisible && (
          <div className=" w-full h-full my-4   ">
            <div
              className="fixed bottom-50 top-20 z-40 
          h-screen w-screen lg:w-2/6  "
            >
              <div
                onClick={handleVisible}
                className="closebutton 
              absolute right-4 flex justify-center items-center text-center align-middle
              my-4 rounded-full
              cursor-pointer  hover:bg-color-winter-header hover:text-white "
              >
                <CloseIcon />
              </div>
              <div>
                <GreatNorthUsersList />
              </div>
            </div>
          </div>
        )}

        {isVisible2 && (
          <div className=" w-full h-full my-4   ">
            <div
              className="fixed bottom-50 top-20 z-40
            h-screen w-screen lg:w-2/6"
            >
              <div
                onClick={handleVisible2}
                className="closebutton 
              absolute right-4 flex justify-center items-center text-center align-middle
              my-4 rounded-full
              cursor-pointer  hover:bg-color-winter-header hover:text-white"
              >
                <CloseIcon />
              </div>
              <div>
                <NorthUsersList />
              </div>
            </div>
          </div>
        )}

        {isVisible3 && (
          <div className=" w-full h-full my-4  ">
            <div
              className="fixed bottom-50 top-20 z-40
            h-screen w-screen lg:w-2/6 "
            >
              <div
                onClick={handleVisible3}
                className="closebutton 
              absolute right-4 flex justify-center items-center text-center align-middle
              my-4 rounded-full
              cursor-pointer  hover:bg-color-winter-header hover:text-white"
              >
                <CloseIcon />
              </div>
              <div>
                <MountainAndValeUserList />
              </div>
            </div>
          </div>
        )}

        {isVisible4 && (
          <div className=" w-full h-full my-4 ">
            <div
              className="fixed bottom-50 top-20 z-40
            h-screen w-screen lg:w-2/6 "
            >
              <div
                onClick={handleVisible4}
                className="closebutton 
              absolute right-4 flex justify-center items-center text-center align-middle
              my-4 rounded-full
              cursor-pointer  hover:bg-color-winter-header hover:text-white"
              >
                <CloseIcon />
              </div>
              <div>
                <IslesAndRiversUsersList />
              </div>
            </div>
          </div>
        )}

        {isVisible5 && (
          <div className=" w-full h-full my-4   ">
            <div
              className="fixed bottom-50 top-20 z-40
            h-screen w-screen lg:w-2/6"
            >
              <div
                onClick={handleVisible5}
                className="closebutton 
              absolute right-4 flex justify-center items-center text-center align-middle
              my-4 rounded-full
              cursor-pointer  hover:bg-color-winter-header hover:text-white"
              >
                <CloseIcon />
              </div>
              <div>
                <TheRockUsersList />
              </div>
            </div>
          </div>
        )}

        {isVisible6 && (
          <div className=" w-full h-full my-4  ">
            <div
              className="fixed bottom-50 top-20 z-40
            h-screen w-screen lg:w-2/6 "
            >
              <div
                onClick={handleVisible6}
                className="closebutton 
              absolute right-4 flex justify-center items-center text-center align-middle
              my-4 rounded-full
              cursor-pointer  hover:bg-color-winter-header hover:text-white"
              >
                <CloseIcon />
              </div>
              <div>
                <StormLandsUsersList />
              </div>
            </div>
          </div>
        )}

        {isVisible7 && (
          <div className=" w-full h-full my-4  ">
            <div
              className="fixed bottom-50 top-20 z-40
            h-screen w-screen lg:w-2/6"
            >
              <div
                onClick={handleVisible7}
                className="closebutton 
              absolute right-4 flex justify-center items-center text-center align-middle
              my-4 rounded-full
              cursor-pointer  hover:bg-color-winter-header hover:text-white "
              >
                <CloseIcon />
              </div>
              <div>
                <TheReachUsersList />
              </div>
            </div>
          </div>
        )}

        {isVisible8 && (
          <div className=" w-full h-full my-4   ">
            <div
              className="fixed bottom-50 top-20 z-40
            h-screen w-screen lg:w-2/6"
            >
              <div
                onClick={handleVisible8}
                className="closebutton 
              absolute right-4 flex justify-center items-center text-center align-middle
              my-4 rounded-full
              cursor-pointer  hover:bg-color-winter-header hover:text-white "
              >
                <CloseIcon />
              </div>
              <div className="">
                <DorneUsersList />
              </div>
            </div>
          </div>
        )}

        {isVisible9 && (
          <div className=" w-full h-full my-4 ">
            <div
              className="fixed bottom-50 top-20 z-40 overflow-auto scrollbar-hide
            h-screen w-screen lg:w-2/6 
          bg-white ccustomshadow"
            >
              <div
                onClick={handleVisible9}
                className="closebutton 
              absolute right-4 flex justify-center items-center text-center align-middle
              my-4 rounded-full
              cursor-pointer  hover:bg-color-winter-header hover:text-white"
              >
                <CloseIcon />
              </div>
              <div className="">
                <KingsLandingUsersList />
              </div>
            </div>
          </div>
        )}

        {/* //////////////////////LIST//////////////////////////// */}
        <div className="mapTitle flex flex-row items-center justify-center">
          <img className=" w-16 h-16" alt="compass" src={compass}></img>
          <h1 className="sevenKingdoms text-center text-2xl">
            The seven kingdoms
          </h1>
        </div>

        <div
          className="mapContent flex flex-col items-center justify-center
      w-11/12 h-auto flex-wrap
      mb-32 mt-8
      shadow-slate-700"
        >
          {/* <h2 className="countries m-4 text-center wrap lg:text-2xl">The Great North</h2> */}
          {/* <h2 className="countries m-4 text-center lg:text-2xl">The North</h2> */}
          {/* <h2 className="countries m-4 text-center lg:text-2xl">Isles and the Rivers</h2> */}
          {/* <h2 className="countries m-4 text-center lg:text-2xl">Mountain and the vale</h2> */}
          {/* <h2 className="countries m-4 text-center lg:text-2xl">The rock</h2>*/}
          {/* <h2 className="countries m-4 text-center lg:text-2xl">The reach</h2> */}
          {/* <h2 className="countries m-4 text-center lg:text-2xl">Stormlands</h2> */}
          {/* <h2 className="countries m-4 text-center lg:text-2xl">Dorne</h2> */}

          <div className="l6
           flex justify-center
            w-6/12 my-8">
            <div className="kingsLanding hover:scale-110 transition-all w-4/12  ">
              <img
                onClick={handleVisible9}
                className="  w-full h-full cursor-pointer"
                alt="#"
                src={ironthrone}
              ></img>
            </div>
          </div>

          <hr className='w-11/12
          my-24
          border border-black '/>
          
          <div className="l1 w-full flex justify-center items-center">
            <div className="greatnorth hover:scale-110 transition-all w-6/12  ">
              <img
                onClick={handleVisible}
                className="greatnorth  h-full cursor-pointer transition-all"
                alt="#"
                src={gnorth}
              ></img>
            </div>
          </div>
          <div className="l2 w-full flex justify-center items-center ">
            <div className="north hover:scale-110  transition-all w-6/12  ">
              <img
                onClick={handleVisible2}
                className="north  h-full cursor-pointer"
                src={north}
                alt="north"
              />
            </div>
          </div>
          
          <div className="l3 mb-16 flex flex-row">
          <div className="rock hover:scale-110 transition-all w-full  ">
              <img
                onClick={handleVisible5}
                className="  w-full h-full mt-16 cursor-pointer"
                alt="#"
                src={rock}
              ></img>
            </div>
            <div className="iron hover:scale-110 transition-all w-full  ">
              <img
                onClick={handleVisible4}
                className=" w-full h-full cursor-pointer"
                alt="#"
                src={river}
              ></img>
            </div>

            <div className="mountain hover:scale-110  transition-all w-full  ">
              <img
                onClick={handleVisible3}
                className="  w-full h-full cursor-pointer"
                alt="#"
                src={vale}
              ></img>
            </div>

            
          </div>
          <div className="l4 -mt-16 flex flex-row">
            <div className="reach hover:scale-110  transition-all w-full  ">
              <img
                onClick={handleVisible7}
                className="  w-full h-full cursor-pointer"
                alt="#"
                src={reach}
              ></img>
            </div>

            <div className="storm hover:scale-110 transition-all w-full  ">
              <img
                onClick={handleVisible6}
                className="  w-full  h-full cursor-pointer"
                alt="#"
                src={stormlands}
              ></img>
            </div>
          </div>
          <div className="l5 w-6/12 mb-8">
            <div className="dorne   hover:scale-110 transition-all w-full  ">
              <img
                onClick={handleVisible8}
                className="  w-full h-full cursor-pointer"
                alt="#"
                src={dorne}
              ></img>
            </div>
          </div>
          
        </div>
        <div className="lg:hidden w-screen">
          <MobileFooter />
        </div>
      </div>
    </div>
  );
};
