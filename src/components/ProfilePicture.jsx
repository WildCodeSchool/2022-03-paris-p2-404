import { useEffect } from "react";

function ProfilePicture(props) {

    const { profiles } = props;

    let isConnected = Math.random();
    
  return(
    <div className="relative w-52 h-52">
      <img className="rounded-full border-4 border-black overflow-hidden w-52 h-52" src={profiles.imageUrl} alt="profile portrait" />
      <div className={`absolute left-200 bottom-100 ${isConnected < 0.5 ? "bg-green-700" : "bg-red-700"} h-7 w-7 rounded-full z-10`}></div>
    </div>
  );
};

export default ProfilePicture;