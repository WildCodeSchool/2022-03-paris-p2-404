// Display content of user posts
export const UserQuote = ({sentence}) => {
  
  return (
    <div className="UserQuote w-full p-7 text-center font-bold text-lg">
      <p>{sentence && sentence}</p>
      <p>Bonjour</p>
    </div>
  );
};
