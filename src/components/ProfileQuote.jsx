import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ProfileQuote() {
  const [quotes, setQuotes] = useState()
  const {id} = useParams();

  const whatSay = [];
  useEffect(() => {
    axios
        .get(`http://localhost:8000/api/quotes/${id}`)
        .then(res => res.data)
        .then(data => {
          setQuotes(data);
        whatSay.push(data)
          console.log(whatSay);
        }).catch((err) => console.log(err))}, []);

        
  setTimeout(() => { 
    console.log(whatSay[0]);
    return (
    <div className='p-2'>
      {/* {whatSay[0].filter((item, index, array) => {
        return index === (Math.floor(Math.random()*array.length));
      }).map(quote => <p key={quote.sentence}>{`"${quote.sentence}"`}</p>)}
     <p>{}</p> */}Bonjour
    </div>
  )}, 3000)

};

export default ProfileQuote;