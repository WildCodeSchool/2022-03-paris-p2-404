// React imports
import { useEffect, useState } from 'react';
import FormPost from './FormPost';

// Axios import
import axios from 'axios';

// Components imports
import { PostPicture } from './PostPicture';
import { UserInfo } from './UserInfo';
import { UserQuote } from './UserQuote';
import { CommentList } from '../components/comments/CommentList';

// UserPost component
export const JonPost = ({posts, completePosts}) => {
  // Set up state to store character information
  const [character, setCharacter] = useState({});

  // Fetch API. Get a random character data and store it into character state above
  useEffect(() => {
    axios
      .get(`https://thronesapi.com/api/v2/Characters/2`)
      .then((res) => res.data)
      .then((data) => setCharacter(data));
  }, []);

  return (
    <div className="UserPost bg-color-winter-primary w-full my-4 rounded-lg text-color-black shadow-color-font-dark shadow-md">
      {/* md:w-3/5 */}
      <div className="postHeader  flex flex-row gap-x-4 pt-4 pl-4 pb-4">
        {/* Display profile picture */}
        <div className="picContent w-2/12">
          <div className="postPicture absolute">
            <PostPicture character={character} />
          </div>
        </div>
        {/* Display username and date of publication */}
        <div className="w-10/12">
          <UserInfo character={character} />
        </div>
      </div>
      <hr className="border-1 border-black" />
      <div className="postContent px-10">
        {/* Display post content */}
        {/* <<UserQuote character={character} />> ICI ON VA METTRE LE TEXTE DE L INPUT*/}
        {/* <p>{}</p> */}
        <div
        key={posts.id}
        onClick={() => completePosts(posts.id)}
        class="flex  flex-row gap-4 mx-4 my-0.5 border-t border-black p-4 bg-color-winter-primary"
      ></div>
       
      </div>
      <hr className="border-1 border-black shadow-black shadow-sm" />
      <div className="font-[font-standard]">
        <CommentList />
      </div>
    </div>
  );
};
