import compassLogo from "../assets/icons/compass.png";
import throneLogo from "../assets/icons/throne.png";
import trumpetLogo from "../assets/icons/trumpet.png";
import queenLogo from "../assets/icons/queen.png";
import { useState } from "react";

function MobileFooter() {

  /* The following multiple useState will be replaced with a single condition in className.
  ex : ${window.location.pathname === '/' ? 'bg-color-winter-hover-mobile-footer' : ''}
  Just waiting for the routes.
*/
  const [isClicked1, setIsClicked1] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const [isClicked3, setIsClicked3] = useState(false);
  const [isClicked4, setIsClicked4] = useState(false);

  function handleClick1() {
    setIsClicked1(true);
    setIsClicked2(false);
    setIsClicked3(false);
    setIsClicked4(false);
  };
  function handleClick2() {
    setIsClicked1(false);
    setIsClicked2(true);
    setIsClicked3(false);
    setIsClicked4(false);
  };
  function handleClick3() {
    setIsClicked1(false);
    setIsClicked2(false);
    setIsClicked3(true);
    setIsClicked4(false);
  };
  function handleClick4() {
    setIsClicked1(false);
    setIsClicked2(false);
    setIsClicked3(false);
    setIsClicked4(true);
  };

    return (
        <div className="font-[font-got] text-color-heart-icon bg-color-winter-footer
        h-20 w-full flex flex-row justify-around">
          <div className={`flex w-1/4 justify-center items-center ${isClicked1 ? "bg-color-winter-hover-mobile-footer" : ""}`}>
              <img onClick={handleClick1} className="h-3/4" src={compassLogo} alt="compass icon" />
          </div>
          <div className={`flex w-1/4 justify-center items-center ${isClicked2 ? "bg-color-winter-hover-mobile-footer" : ""}`}>
              <img onClick={handleClick2} className="h-3/4" src={throneLogo} alt="throne icon" />
          </div>
          <div  className={`flex w-1/4 justify-center items-center ${isClicked3 ? "bg-color-winter-hover-mobile-footer" : ""}`}>
              <img onClick={handleClick3} className="h-3/4" src={trumpetLogo} alt="trumpet icon" />
          </div>
          <div className={`flex w-1/4 justify-center items-center ${isClicked4 ? "bg-color-winter-hover-mobile-footer" : ""}`}>
              <img onClick={handleClick4} className="h-3/4" src={queenLogo} alt="queen icon" />
          </div> 
        </div>
    );
};

export default MobileFooter;