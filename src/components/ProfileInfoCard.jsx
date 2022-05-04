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
import { useParams } from "react-router-dom";

function ProfileInfoCard() {
    const [profiles, setProfiles] = useState({});
    const [quotes, setQuotes] = useState({});
    

    let { id } = useParams();

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/users/${id}`)
            .then(res => res.data)
            .then(data => setProfiles(data));
    }, [id]);

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/quotes/${id}`)
            .then(res => res.data)
            .then(data => setQuotes(data));
      }, [id]);



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
                <div className="flex flex-col items-center w-screen mb-8 border-2 p-2 customshadow">
                    <ProfileName profiles={profiles} />
                    <ProfileQuote quotes={quotes} />
                </div>
                <div className="w-4/6">
                    <div>
                      {Array.apply(null, {length: ((Math.random()*30)+1)}).map(item => <UserPost />)}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ProfileInfoCard;