// React Imports
import { useState } from "react";

// Material UI imports
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

// LikeCounter component
export const LikeCounter = () => {
  // Set up state for the counter. Default value will be a random integer between 1 and 100
  const [likeCount, setLikeCount] = useState(
    Math.floor(Math.random() * (100 - 1) + 1)
  );
  // Set up state to know whether you already liked a post or not
  const [liked, setLiked] = useState(false);

  const [likedMessage, setLikedMessage] = useState(` Liked this post`);
  

  // Increment counter of likes and set state of 'liked' to true so that a user can only like a post once
  const handleClickIncrement = () => {
    if (!liked) {
      setLikeCount(likeCount + 1);
      setLiked(true);
      setLikedMessage(` You and ${likeCount} others liked this post`);
    }
  };

  // Decrement counter of likes and set state of 'liked' to false so that a user can only un-like a post once
  const handleClickDecrement = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
      setLiked(false);
      setLikedMessage(` liked this post`);
    }
  };

  return (
    <div className="LikeCounter flex">
      {/* Display outlined or filled icon depending on whether you already liked a post or not */}
      {!liked ? (
        <FavoriteBorderIcon
          onClick={handleClickIncrement}
          className="text-gray-500 cursor-pointer hover:text-color-heart-icon hover:scale-125 transition-all"
        ></FavoriteBorderIcon>
      ) : (
        <FavoriteIcon
          onClick={handleClickDecrement}
          className="text-color-heart-icon hover:text-gray-500"
        ></FavoriteIcon>
      )}

      {/* Display counter */}
      <div className="font-[font-standard] text-base mx-1"><span class={liked ? "text-color-heart-icon" : ""}>{likeCount}</span>{likedMessage}</div>
    </div>
  );
};
