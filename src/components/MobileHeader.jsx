import FormPost from "./FormPost";
import mainLogo from "../assets/icons/wall-icon-white.png";
import writingLogoWhite from "../assets/icons/writing-white.png";
import CloseIcon from '@mui/icons-material/Close';

import { useState } from "react";



const MobileHeader = () =>  {
    const [isVisible, setIsVisible] = useState(false);

    const handleVisible = () => {setIsVisible(!isVisible)};

    return (
        <div className="headerM flex fixed z-40 justify-between items-center bg-color-winter-header w-screen h-20 top:0">
            <img className="h-3/4" src={mainLogo} alt="main logo" />
            <button onClick={handleVisible} className=" h-20 w-50 pr-5 pl-5 mr-0 hover:bg-color-winter-hover-desktop-header">
            <img className="w-30 h-10" src={writingLogoWhite} alt="message logo" /> 
            </button>
            {isVisible && <div className="absolute w-screen mt-60 ">
            <div
              onClick={handleVisible}
              className="closebutton 
              absolute right-11 top-16 flex justify-center items-center text-center align-middle
              my-4 rounded-full z-50
              cursor-pointer hover:scale-125 hover:bg-color-winter-header hover:text-white"
            >
              <CloseIcon />
            </div> 
             <FormPost isVisible={isVisible} setIsVisible={setIsVisible}/> </div>}
        </div>
    )};

 
 export default MobileHeader;