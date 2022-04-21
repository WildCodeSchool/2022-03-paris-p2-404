// React imports
import { useEffect, useState } from "react";

// Axios import
import axios from "axios";

// Components imports
import { PostPicture } from "./PostPicture";
import { UserInfo } from "./UserInfo";
import { UserQuote } from "./UserQuote";

// UserPost component
export const UserPost = () => {
  // Set up state to store character information
  const [character, setCharacter] = useState({});

  // Fetch API. Get a random character data and store it into character state above
  useEffect(() => {
    axios
      .get(`https://thronesapi.com/api/v2/Characters/${randomId}`)
      .then((res) => res.data)
      .then((data) => setCharacter(data));
  }, []);
  let randomId = Math.floor(Math.random() * 53);

  return (
    <div className="UserPost bg-color-winter-background w-3/5 mt-5 rounded-lg pb-4">
      <div className="postHeader flex gap-x-4 pt-4 pl-10 pb-4">
        {/* Display profile picture */}
        <PostPicture character={character} />
        {/* Display username and date of publication */}
        <UserInfo character={character} />
      </div>
      <hr className="border-1 border-black" />
      <div className="postContent mx-10">
        {/* Display post content */}
        <UserQuote character={character} />
      </div>
    </div>
  );
};
