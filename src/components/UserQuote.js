import { defaultListboxReducer } from "@mui/base";

// Display content of user posts
export const UserQuote = (props) => {

 const { quotes, quoteExist, defaultQuote } = props;

  // console.log(quotes);
  // console.log(quoteExist);
  // console.log(defaultQuote);

  const oneQuote = quotes[Math.floor(Math.random()*quotes.length)];

  
  return (
    <div className="UserQuote w-full my-2 lg:p-7 text-center font-bold text-lg">
      <p>{quoteExist ? oneQuote && oneQuote.sentence : defaultQuote}</p>
    </div>
  );
};
