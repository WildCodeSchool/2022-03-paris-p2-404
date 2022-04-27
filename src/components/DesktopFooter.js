export const DesktopFooter = () => {
  return (
    <div
      className="
        hidden lg:grid grid-cols-3 justify-items-center items-center static bottom-0
        w-screen
        mt-10
        bg-color-winter-footer text-xs xl:text-sm 2xl:text-2xl text-color-font-dark
    "
    >
      <div>
        <h2
          className="
            col-start-1 col-end-2
            font-[font-standard] font-bold
        "
        >
          Wall
        </h2>
        <p>Questions</p>
        <p>Help</p>
      </div>

      <div className="my-4">
        <h2
          className="
            col-start-2 col-end-3
            font-[font-standard] font-bold
        "
        >
          Company
        </h2>
        <p>About</p>
        <p>Legal</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
        <p>Contact Us</p>
      </div>

      <div className="col-start-3 col-end-4 self-end place-self-end mb-4 mr-4">
        Site design / logo &copy; 2022 404 Inc.
      </div>
    </div>
  );
};
