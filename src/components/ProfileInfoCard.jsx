import axios from "axios";
import { useEffect, useState } from "react";
import ProfilePicture from "./ProfilePicture";
import ProfileName from "./ProfileName";
import ProfileQuote from "./ProfileQuote";
import Navbar from "./Navbar";
import { CoverPictures } from "./coverPictures/CoverPictures";
import Profile_Interact_Button from "./Profile_Interact_Button";
import { UserPost } from "./UserPost";
import throne from "../assets/icons/throne.png"

function ProfileInfoCard() {
    const [profiles, setProfiles] = useState({});

    useEffect(() => {
        axios
            .get("https://thronesapi.com/api/v2/Characters/0")
            .then(res => res.data)
            .then(data => setProfiles(data));
    }, []);

    console.log(profiles);

    return (
        <div>
            <Navbar />
            <div className="profilecontent flex flex-col items-center ">
                <div className="relative flex flex-col items-center">
                    <CoverPictures profiles={profiles} />
                    <div className="absolute -bottom-24">
                        <ProfilePicture profiles={profiles} />
                    </div>
                </div>
                <div className="flex w-screen">
                    <div className="w-1/2"></div>
                    <div className="flex w-1/2 justify-center h-32">
                        <div className="my-4">
                            <Profile_Interact_Button />
                        </div>
                    </div>
                </div>
                <div className="border-2 rounded-md p-2 customshadow">
                    <ProfileName profiles={profiles} />
                    <ProfileQuote profiles={profiles} />
                </div>
                <div className="w-4/6">
                    <div>
                      <div className="flex">
                        <img src={throne} alt="throne icon" className="w-16 h-16"/>
                        <h2 className="p-6">Latest Activity :</h2>
                      </div>
                      {Array.apply(null, {length: (Math.random()*30)}).map(item => <UserPost />)}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ProfileInfoCard;