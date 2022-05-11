import axios from "axios";
import { useEffect, useState } from "react";
import ProfilePicture from "../components/ProfilePicture";
import ProfileName from "../components/ProfileName";
import ProfileQuote from "../components/ProfileQuote";
import Navbar from "../components/Navbar";
import { CoverPictures } from "../components/coverPictures/CoverPictures";
import Profile_Interact_Button from "../components/Profile_Interact_Button";
import { UserPost } from "../components/UserPost";
import { useParams } from "react-router-dom";
import MobileFooter from "../components/MobileFooter";
import MobileHeader from "../components/MobileHeader";


function MyProfile() {
    const [profiles, setProfiles] = useState({});
    

    let { id } = useParams();

    useEffect(() => {
        axios
            .get(`/api/myprofile`, {withCredentials: true})
            .then(res => {
                console.log(res);
                return res.data;
            })
            .then(data => setProfiles(data))
            .catch(err => console.log(err));
    }, []);


    return (
        <div>
           <div className="hidden sm:hidden md:inline">
            <Navbar />
            </div>
            <div className="md:hidden">
            <MobileHeader />
            </div>
            <div className="profilecontent flex flex-col items-center ">
                <div className="relative flex flex-col items-center">
                    <CoverPictures profiles={profiles} />
                    <div className="absolute -bottom-24">
                        <ProfilePicture profiles={profiles} />
                    </div>
                </div>
                <div className="flex w-screen">
                    <div className="w-1/2">
                    <div className=" absolute flex my-4">
                    <Profile_Interact_Button />
                    </div>
                    </div>
                    <div className="flex w-1/2 justify-center h-32">
                    </div>
                </div>
                <div className="flex flex-col items-center w-screen mb-8 border-2 p-2 customshadow">
                    <ProfileName profiles={profiles} />
                    <ProfileQuote />
                </div>
                <div className="w-11/12 lg:w-4/6">
                    <div>
                      {Array.apply(null, {length: ((Math.random()*30)+1)}).map(item => <UserPost />)}
                    </div>
                </div>
                <div className="w-full md:hidden">
                    <MobileFooter />
                </div>
            </div>
        </div>
    );
};
export default MyProfile;