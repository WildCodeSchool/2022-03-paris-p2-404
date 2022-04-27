import axios from "axios";
import { useEffect, useState } from "react";
import ProfilePicture from "./ProfilePicture";
import ProfileName from "./ProfileName";
import ProfileQuote from "./ProfileQuote";
import Navbar from "./Navbar";
import { CoverPictures } from "./coverPictures/CoverPictures";
import Profile_Interact_Button from "./Profile_Interact_Button";

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
          <Navbar />
          <CoverPictures profiles={profiles} />
          <ProfilePicture profiles={profiles}/>
          <Profile_Interact_Button />
          <ProfileName profiles = {profiles} />
          <ProfileQuote profiles = {profiles} />
        </div>
    );
};
export default ProfileInfoCard;