import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import { useState } from "react";

export const CreateAccountForm = ({ isVisible, toggleVisible }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [title, setTitle] = useState("");
  const [family, setFamily] = useState("");
  const [picture, setPicture] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("fonction");

    const data = {
      first_name: firstname,
      last_name: lastname,
      full_name: `${firstname} ${lastname}`,
      title: title,
      family: family,
      list_imageUrl: picture,
      email: email,
      password: password,
    };

    console.log(data);

    axios
      .post("/api/users", data, {withCredentials: true})
      .then ((res)=>{
        console.log(res.data)
        window.location = '/';})
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {isVisible && (
        <div className="flex items-center absolute inset-0 bg-black bg-opacity-50">
          <div
            className="
                flex flex-col items-center
                absolute inset-x-10 lg:inset-x-20 xl:inset-x-40
                bg-white rounded-lg
            "
          >
            <CloseIcon
              onClick={toggleVisible}
              className="absolute top-0 right-0 cursor-pointer"
            />

            <div className="mb-10  mt-10">
              Connect with Westeros now
              <br />-<br />
              Create your account
            </div>
            <form onSubmit={(e) => handleSubmit(e)}>
              <input
                placeholder="Firstname"
                type="text"
                required
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                className="w-4/5 md:w-11/12 placeholder:pl-3 placeholder:text-sm lg:placeholder:text-lg xl:placeholder:text-xl
                py-1 lg:py-2  my-1 lg:my-2 
                font-[font-standard] border border-1 border-black bg-slate-200 placeholder:text-gray-600 shadow-sm shadow-color-font-dark
            "
              />

              <input
                placeholder="Lastname"
                type="text"
                required
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                className="w-4/5 md:w-11/12 placeholder:pl-3 placeholder:text-sm lg:placeholder:text-lg xl:placeholder:text-xl
              py-1 lg:py-2 my-1 lg:my-2
              font-[font-standard] border border-1 border-black bg-slate-200 placeholder:text-gray-600 shadow-sm shadow-color-font-dark
            "
              />

              <input
                placeholder="Title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-4/5 md:w-11/12 placeholder:pl-3 placeholder:text-sm lg:placeholder:text-lg xl:placeholder:text-xl
              py-1 lg:py-2 my-1 lg:my-2
              font-[font-standard] border border-1 border-black bg-slate-200 placeholder:text-gray-600 shadow-sm shadow-color-font-dark
            "
              />

              <input
                placeholder="Family"
                type="text"
                value={family}
                onChange={(e) => setFamily(e.target.value)}
                className="w-4/5 md:w-11/12 placeholder:pl-3 placeholder:text-sm lg:placeholder:text-lg xl:placeholder:text-xl
              py-1 lg:py-2 my-1 lg:my-2
              font-[font-standard] border border-1 border-black bg-slate-200 placeholder:text-gray-600 shadow-sm shadow-color-font-dark
            "
              />

              <input
                placeholder="Picture"
                type="text"
                value={picture}
                onChange={(e) => setPicture(e.target.value)}
                className="w-4/5 md:w-11/12 placeholder:pl-3 placeholder:text-sm lg:placeholder:text-lg xl:placeholder:text-xl
              py-1 lg:py-2 my-1 lg:my-2 
              font-[font-standard] border border-1 border-black bg-slate-200 placeholder:text-gray-600 shadow-sm shadow-color-font-dark
            "
              />

              <input
                placeholder="Email"
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-4/5 md:w-11/12 placeholder:pl-3 placeholder:text-sm lg:placeholder:text-lg xl:placeholder:text-xl
              py-1 lg:py-2 my-1 lg:my-2
              font-[font-standard] border border-1 border-black bg-slate-200 placeholder:text-gray-600 shadow-sm shadow-color-font-dark
            "
              />

              <input
                placeholder="Password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-4/5 md:w-11/12 placeholder:pl-3 placeholder:text-sm lg:placeholder:text-lg xl:placeholder:text-xl
              py-1 lg:py-2 my-1 lg:my-2
              font-[font-standard] border border-1 border-black bg-slate-200 placeholder:text-gray-600 shadow-sm shadow-color-font-dark
            "
              />

              <button
                onClick={handleSubmit}
                className="                
                py-2 xl:py-4 px-3 mt-10 mb-10
                font-[font-got] border border-1 border-black bg-color-winter-button rounded-lg hover:bg-color-winter-header hover:text-color-font-light shadow-md shadow-color-font-dark hover:transition-shadow hover:shadow-sm hover:shadow-color-font-dark
              ">
                Create
                </button>
              </form>
          </div>
        </div>
      )}
    </div>
  );
};
