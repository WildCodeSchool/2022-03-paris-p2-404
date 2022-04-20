import compassLogo from "../assets/fonts/icons/compass.png";
import throneLogo from "../assets/fonts/icons/throne.png";
import trumpetLogo from "../assets/fonts/icons/trumpet.png";
import queenLogo from "../assets/fonts/icons/queen.png";

function MobileFooter() {

    return (
        <div className="font-[font-got] text-color-heart-icon bg-color-winter-primary h-20 w-full flex flex-row
        justify-around">
          <div className="flex w-1/4 justify-center items-center">
              <img className="h-3/4" src={compassLogo} alt="compass icon" />
          </div>
          <div className="flex w-1/4 justify-center items-center">
              <img className="h-3/4" src={throneLogo} alt="throne icon" />
          </div>
          <div className="flex w-1/4 justify-center items-center">
              <img className="h-3/4" src={trumpetLogo} alt="trumpet icon" />
          </div>
          <div className="flex w-1/4 justify-center items-center">
              <img className="h-3/4" src={queenLogo} alt="queen icon" />
          </div>      
        </div>
    )
}

export default MobileFooter;