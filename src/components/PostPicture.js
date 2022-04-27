import { Link } from "react-router-dom";

// Display users' profile picture in posts' header
export const PostPicture = ({ character }) => {
  return (
    <Link to={`/users/${character.id}`}><div className="PostPicture">
      <img
        src={character.imageUrl}
        alt={character.fullName}
        key={character.fullName}
        className="rounded-full h-20 w-20 object-cover border border-black
        hover:h-24 hover:w-24 hover:transition-all hover:shadow-lg hover:shadow-color-font-dark"
      />
    </div>
    </Link>
  );
};
