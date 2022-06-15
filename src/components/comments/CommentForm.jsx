import React from 'react';
import { useState } from 'react';
import ChatIcon from '@mui/icons-material/Chat';
import { LikeCounter } from '../LikeCounter';
import AddCommentIcon from '@mui/icons-material/AddComment';

export const CommentForm = (props) => {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput('');
  };

  const [commentCount, setCommentCount] = useState(
    Math.floor(Math.random() * (29 - 1) + 1)
  );

  const handleClickIncrement = () => {
    if (input === '') {
      return alert('***  Text needed here  ****');
    } else {
      setCommentCount(commentCount + 1);
    }
  };

  return (
    <div class="mx-4 p-2 rounded-lg mb-3">
      <div class="flex flex-row gap-x-2">
        <div >
          <LikeCounter />
        </div>
        <div className="mx-1 text-color-winter-background">
          <ChatIcon />
          <span
            className="text-color-font-dark font-bold mx-1">
            {commentCount}
          </span>
        </div>
      </div>
      <form className="comment-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add comment here"
          value={input}
          name="text"
          className="comment-input border-0 w-full rounded-2xl px-2 my-2 shadow-inner shadow-color-winter-header "
          onChange={handleChange}
          class="border-0 w-full h-8 rounded-2xl px-2 my-2 shadow-inner shadow-color-winter-header "
        />
        <button onClick={handleClickIncrement}
                  className="search-button absolute  w-8 h-8 right-8 px-2 mt-2 mr-2
                  text-color-winter-footer  font-light rounded-full border-black text-color-winter-header cursor-pointer hover:text-color-font-dark  "
                  ><AddCommentIcon/></button>
        
      
      </form>
    </div>
  );
};
