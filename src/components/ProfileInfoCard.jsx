import axios from "axios";
import { useEffect, useState } from "react";
import ProfilePicture from "./ProfilePicture";

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
          <ProfilePicture profiles={profiles}/>
        </div>
    );
};
export default ProfileInfoCard;