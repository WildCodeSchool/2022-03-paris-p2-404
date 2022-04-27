import React, { useEffect } from 'react'
import { useState } from 'react';
import { quotes } from './Quotes';

function ProfileQuote(props) {

const { firstName } = props.profiles;
console.log(firstName);

const randomChoose = Math.random();

  return (
    <div>
      {quotes.filter((item) => {
        return item.character === firstName;
      }
      ).filter((item, index, array) => {
        return index === Math.floor((randomChoose*(array.length)));
      }).map(quote => <p key={quote.sentence}>{quote.sentence}</p>)}
    </div>
  )
};

export default ProfileQuote;