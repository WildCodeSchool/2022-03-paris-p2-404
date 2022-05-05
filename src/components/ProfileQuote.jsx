import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ProfileQuote() {
  const [quotes, setQuotes] = useState(null)
  const {id} = useParams();

  const whatSay = [];
  useEffect(() => {
    axios
        .get(`http://localhost:8000/api/quotes/${id}`)
        .then(res => res.data)
        .then(data => {
        setQuotes(data);
        // console.log(data);
        whatSay.push(data)
        })}, []);

        console.log(quotes);

        return (
          <div className='p-2'>
            {quotes.filter((item, index, array) => {
              return index === (Math.floor(Math.random()*array.length));
            }).map(quote => <p key={quote.sentence}>{`"${quote.sentence}"`}</p>)}
           <p>{}</p>
          </div>
        )

};

export default ProfileQuote;