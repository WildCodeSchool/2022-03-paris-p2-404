import compassLogo from "../assets/icons/compass.png";
import throneLogo from "../assets/icons/throne.png";
import trumpetLogo from "../assets/icons/trumpet.png";
import queenLogo from "../assets/icons/queen.png";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function MobileFooter() {

    const [character, setCharacter] = useState({});

useEffect(() => {
  axios
      .get(`/api/myprofile`, {withCredentials: true})
      .then((res) => res.data)
      .then((data) => setCharacter(data));
  }, []);


    return (
        <div className="footerM bg-color-winter-footer
        h-16 sm:h-20 w-full flex flex-row justify-around">
        
          <NavLink to="/map" className="flex w-1/4 justify-center items-center" >
              <img  className="h-3/4" src={compassLogo} alt="compass icon" />
          </NavLink>
          <NavLink to="/" className="flex w-1/4 justify-center items-center">
              <img  className="h-3/4" src={throneLogo} alt="throne icon" />
          </NavLink>
          <NavLink to="/latest" className="flex w-1/4 justify-center items-center">
              <img  className="h-3/4" src={trumpetLogo} alt="trumpet icon" />
          </NavLink>
          <NavLink className="flex w-1/4 justify-center items-center" to="/myprofile" ><button type="button" className="flex justify-center items-center w-12 h-12 rounded-full border
     border-gray-300 shadow-sm  bg-white text-sm font-medium text-black hover:bg-gray-50 hover:border-4" 
      id="menu-button">
      <img src={character.list_imageUrl} alt='ProfilePicture' className="rounded-full justify-center items-center w-full h-full object-cover"/>
    </button>
          </NavLink>
        </div>
    );
};

export default MobileFooter;