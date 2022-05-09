import { useState } from "react";
import snowstorm from "../assets/videos/snowstorm.mp4";
import { Link } from "react-router-dom";
import { CreateAccountForm } from "../components/CreateAccountForm";
import axios from "axios";

export const LoginPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisible = () => setIsVisible(!isVisible);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
  
    console.log(data);

    axios
      .post("http://localhost:8000/api/users/auth", data)
      .then ((res)=>{
        console.log(res.data)
        window.location = '/';})
      .catch((err) => console.log(err));
  };

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
          h-screen w-screen md:w-1/2 text-sm lg:text-lg xl:text-xl 
          text-black md:bg-slate-300
        "
      >
        <img
          src={require("../assets/icons/wall-icon-black.png")}
          alt="logo"
          className="w-3/6 mb-10"
        />

        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            placeholder="email"
            type="text"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-4/5 md:w-11/12 placeholder:text-sm lg:placeholder:text-lg xl:placeholder:text-xl
              py-2 placeholder:pl-3 my-2
              font-[font-standard] border border-1 border-black bg-slate-200 rounded-xl placeholder:text-gray-600 shadow-sm shadow-color-font-dark
            "
          />

          <input
            placeholder="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-4/5 md:w-11/12 placeholder:text-sm lg:placeholder:text-lg xl:placeholder:text-xl
              py-2 placeholder:pl-3 my-2
              font-[font-standard] border border-1 border-black bg-slate-200 rounded-xl placeholder:text-gray-600 shadow-sm shadow-color-font-dark
            "
          />

          <div className="flex flex-col items-center gap-y-4">
            <input 
              type="submit"
              className="                
                py-2 xl:py-4 px-3 mb-2 mt-10 lg:mt-10 xl:mt-16
                font-[font-got] border border-1 border-black bg-color-winter-button rounded-lg hover:bg-color-winter-header hover:text-color-font-light shadow-md shadow-color-font-dark hover:transition-shadow hover:shadow-sm hover:shadow-color-font-dark
              " />
           
            </div>
            </form>

            <div className="font-[font-standard]">
              or create your account{" "}
              <span
                className="underline cursor-pointer"
                onClick={toggleVisible}
              >
                here
              </span>
            </div>
            <CreateAccountForm
              isVisible={isVisible}
              toggleVisible={toggleVisible}
            />
          </div>
        
      </div>
   
  );
};
