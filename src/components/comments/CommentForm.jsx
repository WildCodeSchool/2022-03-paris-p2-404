import React from 'react';
import { useState} from 'react';
import ChatIcon from '@mui/icons-material/Chat';
import { LikeCounter } from '../LikeCounter';

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
    if(input===''){
      return alert('***  Text needed here  ****');}
      else{
    setCommentCount(commentCount + 1);}
  };
  
  
  return (
    <div class="mx-4 p-4 bg-color-winter-primary rounded-lg shadow-black shadow-md">
      <div class="flex flex-row gap-x-2">
        <div>
          <LikeCounter />
        </div>
        <div class="mx-1 text-color-winter-background">
          <ChatIcon />
          <span
            class="text-color-font-dark font-bold mx-1
"
          >
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
          className="comment-input"
          onChange={handleChange}
          class="border-0 rounded-2xl px-2 my-2 shadow-inner shadow-color-winter-header "
        />

        <button
          onClick={handleClickIncrement}
          className="comment-button font-light border rounded-2xl px-2 m-2 bg-color-winter-button border-black hover:bg-color-winter-header hover:text-color-font-light shadow-sm shadow-color-winter-header "
        >
          Add comment
        </button>
      </form>
    </div>
  );
};