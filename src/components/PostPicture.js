import { Link } from "react-router-dom";

// Display users' profile picture in posts' header
export const PostPicture = ({ character }) => {
  return (
    <Link to={`/users/${character.id}`}><div className="PostPicture">
      <img
        src={character.list_imageUrl}
        alt={character.full_name}
        key={character.full_name}
        className="rounded-full h-12 w-12 lg:h-20 lg:w-20 object-cover 
        border border-black shadow-sm shadow-color-font-dark
        lg:hover:h-24 lg:hover:w-24 lg:hover:transition-all lg:hover:shadow-lg lg:hover:shadow-color-font-dark"
      />
    </div>
    </Link>
  );
};
