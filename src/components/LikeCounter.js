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

  // Increment counter of likes and set state of 'liked' to true so that a user can only like a post once
  const handleClickIncrement = () => {
    if (!liked) {
      setLikeCount(likeCount + 1);
      setLiked(true);
    }
  };

  // Decrement counter of likes and set state of 'liked' to false so that a user can only un-like a post once
  const handleClickDecrement = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
      setLiked(false);
    }
  };

  return (
    <div className="LikeCounter flex gap-x-0.5">
      {/* Display outlined or filled icon depending on whether you already liked a post or not */}
      {!liked ? (
        <FavoriteBorderIcon
          onClick={handleClickIncrement}
          className="text-color-heart-icon"
        ></FavoriteBorderIcon>
      ) : (
        <FavoriteIcon
          onClick={handleClickDecrement}
          className="text-color-heart-icon"
        ></FavoriteIcon>
      )}

      {/* Display counter */}
      <div className="font-[font-standard] text-base">{likeCount}</div>
    </div>
  );
};
