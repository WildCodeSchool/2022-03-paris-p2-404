import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ProfileQuote() {
  const {id} = useParams();
  const [quotes, setQuotes] = useState([]);
  const [quoteExist, setQuoteExist] = useState(true);
  const defaultQuote = "Winter is coming !"

  console.log(id);
  console.log(quoteExist);

  useEffect(() => {
    axios
        .get(`/api/quotes/${id}`, {withCredentials: true})
        .then(res => res.data)
        .then(data => {
          setQuoteExist(true);
          setQuotes(data)})
        .catch(() => setQuoteExist(false))
      }, [id]);
 
      const oneQuote = quotes[Math.floor(Math.random()*quotes.length)];

        return (
          <div className="my-4 text-xl">
            {/* {quotes.filter((item, index, array) => {
              return index === (Math.floor(Math.random()*array.length));
            }).map(quote => <p key={quote[0].sentence}>{`"${quote[0].sentence}"`}</p>)} */}
           <p>{`"${quoteExist ? oneQuote && oneQuote.sentence : defaultQuote}"`}</p>
          </div>
          
        )

};

export default ProfileQuote;