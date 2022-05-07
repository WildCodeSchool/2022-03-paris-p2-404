// React imports
import { useEffect, useState } from 'react';

// Axios import
import axios from 'axios';

// Components imports
import { PostPicture } from './PostPicture';
import { UserInfo } from './UserInfo';
import { UserQuote } from './UserQuote';
import { CommentList } from '../components/comments/CommentList';

// UserPost component
export const UserPost = () => {
  // Set up state to store character information
  const [character, setCharacter] = useState({});
  const [quotes, setQuotes] = useState([])

  // Fetch API. Get a random character data and store it into character state above
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/users/${randomId}`)
      .then((res) => res.data)
      .then((data) => setCharacter(data));
  }, []);
  let randomId = Math.floor(Math.random() * 53);

  useEffect(() => {
    axios
        .get(`http://localhost:8000/api/quotes/${randomId}`)
        .then(res => res.data)
        .then(data => setQuotes(data))
      }, []);

      const oneQuote = quotes[Math.floor(Math.random()*quotes.length)];

  return (
    <div className="UserPost relative bg-color-winter-primary w-full my-4 rounded-lg text-color-black shadow-color-font-dark shadow-md">
      {/* md:w-3/5 */}
      <div className="postHeader  flex flex-row gap-x-4 pt-4 pl-4 pb-4">
        {/* Display profile picture */}
        <div className="z-50  picContent w-3/12">
          <div className="postPicture absolute">
            <PostPicture character={character} />
          </div>
        </div>
          <div className="w-9/12">
            <UserInfo character={character} />
          </div>
        {/* Display username and date of publication */}
        {/* <div className="w-10/12">
          <UserInfo character={character} />
        </div> */}
      </div>
      <hr className="w-full lg:w-10/12 absolute right-0 border-1 border-black" />
      <div className="postContent px-10">
        {/* Display post content */}
        <UserQuote quote={oneQuote} />
      </div>
      <hr className="border-1 border-black shadow-black shadow-sm" />
      <div className="font-[font-standard]">
        <CommentList />
      </div>
    </div>
  );
};
