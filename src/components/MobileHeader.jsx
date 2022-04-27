import mainLogo from "../assets/icons/wall-icon-white.png";
import writingLogoWhite from "../assets/icons/writing-white.png";

function MobileHeader() {

    return (
        <div className="headerM flex fixed z-40 justify-between items-center bg-color-winter-header w-screen h-20">
            <img className="h-3/4" src={mainLogo} alt="main logo" />
            <img className="h-2/4 pr-8" src={writingLogoWhite} alt="message logo" />
        </div>
    );
};

export default MobileHeader;