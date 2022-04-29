import snowstorm from "../assets/videos/snowstorm.mp4";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  return (
    <div>
      <video
        autoPlay
        muted
        loop
        className="
          absolute top-0 left-0 right-0 bottom-0
          w-screen h-screen md:w-1/2
          object-cover -z-10
        "
      >
        <source src={snowstorm} type="video/mp4" />
      </video>

      <div
        className="
          flex flex-col items-center justify-center text-center md:absolute md:left-1/2
          h-screen w-screen md:w-1/2 text-sm lg:text-lg xl:text-xl 2xl:text-4xl
          text-black md:bg-slate-300
        "
      >
        <img
          src={require("../assets/icons/wall-icon-black.png")}
          alt="logo"
          className="w-3/6 mb-10"
        />

        <form>
          <input
            placeholder="USERNAME"
            type="text"
            required
            className="
              text-center placeholder:text-center
              w-4/5 md:w-11/12 placeholder:text-sm lg:placeholder:text-lg xl:placeholder:text-xl 2xl:placeholder:text-4xl
              py-2 my-2
              font-[font-standard] border border-1 border-black bg-color-winter-button rounded-xl placeholder:text-gray-600 shadow-sm shadow-color-font-dark
            "
          />

          <input
            placeholder="PASSWORD"
            type="password"
            required
            className="              
              text-center placeholder:text-center
              w-4/5 md:w-11/12 placeholder:text-sm lg:placeholder:text-lg xl:placeholder:text-xl 2xl:placeholder:text-4xl
              py-2 my-2
              font-[font-standard] border border-1 border-black bg-color-winter-button rounded-xl placeholder:text-gray-600 shadow-sm shadow-color-font-dark
            "
          />

          <div className="flex flex-col items-center gap-y-4">
            <Link to="/">
            <button
              className="                
                py-2 xl:py-4 2xl:py-6 px-3 2xl:px-5 mb-2 mt-10 lg:mt-10 xl:mt-16
                font-[font-got] border border-1 border-black bg-color-winter-button rounded-lg hover:bg-color-winter-header hover:text-color-font-light shadow-md shadow-color-font-dark hover:transition-shadow hover:shadow-sm hover:shadow-color-font-dark
              "
            >
              LOG IN
            </button>
            </Link>

            <div className="font-[font-standard]">
              or create your account <span className="underline">here</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
