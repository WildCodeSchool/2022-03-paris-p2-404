// Display username and date of publication in posts' header
export const UserInfo = ({ character }) => {
  return (
    <div className="UserInfo flex flex-col text-black">
      <div className="font-bold font-[font-got]">{character.full_name}</div>
      <div className="text-sm font-[font-standard]">
        {new Date().toDateString()}
      </div>
    </div>
  );
};
