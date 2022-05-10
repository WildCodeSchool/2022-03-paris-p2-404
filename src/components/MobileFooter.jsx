import compassLogo from "../assets/icons/compass.png";
import throneLogo from "../assets/icons/throne.png";
import trumpetLogo from "../assets/icons/trumpet.png";
import queenLogo from "../assets/icons/queen.png";
import { NavLink } from "react-router-dom";

function MobileFooter() {

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
          <NavLink to="/myprofile" className="flex w-1/4 justify-center items-center">
              <img  className="h-3/4" src={queenLogo} alt="queen icon" />
          </NavLink>
        </div>
    );
};

export default MobileFooter;