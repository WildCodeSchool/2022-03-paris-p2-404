import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ProfileQuote() {
  const {id} = useParams();
  const [quotes, setQuotes] = useState([])

  useEffect(() => {
    axios
        .get(`http://localhost:8000/api/quotes/${id}`)
        .then(res => res.data)
        .then(data => setQuotes(data))
      }, []);
 
      const oneQuote = quotes[Math.floor(Math.random()*quotes.length)];

        return (
          <div>
            {/* {quotes.filter((item, index, array) => {
              return index === (Math.floor(Math.random()*array.length));
            }).map(quote => <p key={quote[0].sentence}>{`"${quote[0].sentence}"`}</p>)} */}
           <p>{oneQuote && oneQuote.sentence}</p>
          </div>
          
        )

};

export default ProfileQuote;