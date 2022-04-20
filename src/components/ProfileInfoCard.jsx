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

useEffect(() => {
    axios
    .get()
})
console.log(profiles);

    return(
        <div>
          <img className="rounded-full border-4 border-black" src={profiles.imageUrl} alt="profile portrait" />
          <div className="isConnected bg-green-700 h-7 w-7 rounded-full"></div>
          <div>Id : {profiles.id}</div>
          <div>First Name : {profiles.firstName}</div>
          <div>Last Name : {profiles.lastName}</div>
          <div>Full Name : {profiles.fullName}</div>
          <div>Title : {profiles.title}</div>
          <div>Family : {profiles.family}</div>
          <div>Image File : {profiles.image}</div>
        </div>
    );
};
export default ProfileInfoCard;