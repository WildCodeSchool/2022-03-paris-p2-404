import axios from "axios";
import { useEffect, useState } from "react";

function ProfileInfoCard() {
    const [profiles, setProfiles] = useState({});

useEffect(() => {   
    axios
    .get("https://thronesapi.com/api/v2/Characters/0")
    .then(res => res.data)
    .then(data => setProfiles(data));
    },[]);

console.log(profiles);

    return(
        <div>
          <img className="rounded-full border-4 border-black" src={profiles.imageUrl} alt="profile portrait" />
          <div className="isConnected bg-green-700 h-7 w-7 rounded-full"></div>
        </div>
    );
};
export default ProfileInfoCard;