// Display users' profile picture in posts' header
export const PostPicture = ({ character }) => {
  return (
    <div className="PostPicture">
      <img
        src={character.imageUrl}
        alt={character.fullName}
        key={character.fullName}
        className="rounded-full h-12 w-12"
      />
    </div>
  );
};
