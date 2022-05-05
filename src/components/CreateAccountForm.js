import CloseIcon from "@mui/icons-material/Close";

export const CreateAccountForm = ({ isVisible, toggleVisible }) => {
  return (
    <div>
      {isVisible && (
        <div className="flex items-center absolute inset-0 bg-black bg-opacity-50">
          <div
            className="
                flex flex-col items-center
                absolute inset-x-10 lg:inset-x-20 xl:inset-x-40 2xl:inset-x-60
                bg-white rounded-lg
            "
          >
            <CloseIcon
              onClick={toggleVisible}
              className="absolute top-0 right-0 cursor-pointer"
            />

            <div className="mb-10 2xl:mb-20 mt-10 2xl:mt-20">
              Connect with Westeros now
              <br />-<br />
              Create your account
            </div>

            <input
              placeholder="Firstname"
              type="text"
              required
              className="w-4/5 md:w-11/12 placeholder:pl-3 placeholder:text-sm lg:placeholder:text-lg xl:placeholder:text-xl 2xl:placeholder:text-4xl
                py-1 lg:py-2 2xl:py-4 my-1 lg:my-2 2xl:my-4
                font-[font-standard] border border-1 border-black bg-slate-200 placeholder:text-gray-600 shadow-sm shadow-color-font-dark
            "
            />

            <input
              placeholder="Lastname"
              type="text"
              required
              className="w-4/5 md:w-11/12 placeholder:pl-3 placeholder:text-sm lg:placeholder:text-lg xl:placeholder:text-xl 2xl:placeholder:text-4xl
              py-1 lg:py-2 2xl:py-4 my-1 lg:my-2 2xl:my-4
              font-[font-standard] border border-1 border-black bg-slate-200 placeholder:text-gray-600 shadow-sm shadow-color-font-dark
            "
            />

            <input
              placeholder="Title"
              type="text"
              className="w-4/5 md:w-11/12 placeholder:pl-3 placeholder:text-sm lg:placeholder:text-lg xl:placeholder:text-xl 2xl:placeholder:text-4xl
              py-1 lg:py-2 2xl:py-4 my-1 lg:my-2 2xl:my-4
              font-[font-standard] border border-1 border-black bg-slate-200 placeholder:text-gray-600 shadow-sm shadow-color-font-dark
            "
            />

            <input
              placeholder="Family"
              type="text"
              className="w-4/5 md:w-11/12 placeholder:pl-3 placeholder:text-sm lg:placeholder:text-lg xl:placeholder:text-xl 2xl:placeholder:text-4xl
              py-1 lg:py-2 2xl:py-4 my-1 lg:my-2 2xl:my-4
              font-[font-standard] border border-1 border-black bg-slate-200 placeholder:text-gray-600 shadow-sm shadow-color-font-dark
            "
            />

            <input
              placeholder="Picture"
              type="text"
              required
              className="w-4/5 md:w-11/12 placeholder:pl-3 placeholder:text-sm lg:placeholder:text-lg xl:placeholder:text-xl 2xl:placeholder:text-4xl
              py-1 lg:py-2 2xl:py-4 my-1 lg:my-2 2xl:my-4
              font-[font-standard] border border-1 border-black bg-slate-200 placeholder:text-gray-600 shadow-sm shadow-color-font-dark
            "
            />

            <input
              placeholder="Email"
              type="text"
              required
              className="w-4/5 md:w-11/12 placeholder:pl-3 placeholder:text-sm lg:placeholder:text-lg xl:placeholder:text-xl 2xl:placeholder:text-4xl
              py-1 lg:py-2 2xl:py-4 my-1 lg:my-2 2xl:my-4
              font-[font-standard] border border-1 border-black bg-slate-200 placeholder:text-gray-600 shadow-sm shadow-color-font-dark
            "
            />

            <input
              placeholder="Password"
              type="text"
              required
              className="w-4/5 md:w-11/12 placeholder:pl-3 placeholder:text-sm lg:placeholder:text-lg xl:placeholder:text-xl 2xl:placeholder:text-4xl
              py-1 lg:py-2 2xl:py-4 my-1 lg:my-2 2xl:my-4
              font-[font-standard] border border-1 border-black bg-slate-200 placeholder:text-gray-600 shadow-sm shadow-color-font-dark
            "
            />

            <button
              className="                
                py-2 xl:py-4 2xl:py-6 px-3 2xl:px-5 mt-10 2xl:mt-20 mb-10 2xl:mb-20
                font-[font-got] border border-1 border-black bg-color-winter-button rounded-lg hover:bg-color-winter-header hover:text-color-font-light shadow-md shadow-color-font-dark hover:transition-shadow hover:shadow-sm hover:shadow-color-font-dark
              "
            >
              Create
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
