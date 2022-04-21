// Display username and date of publication in posts' header
export const UserInfo = ({ character }) => {
  return (
    <div className="UserInfo flex flex-col text-color-font-dark">
      <div className="font-bold text-lg font-[font-got]">
        {character.fullName}
      </div>
      <div className="text-sm font-[font-standard]">
        {new Date().toDateString()}
      </div>
    </div>
  );
};