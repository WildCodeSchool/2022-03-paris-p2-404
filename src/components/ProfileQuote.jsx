import React, { useEffect, useState } from 'react'

function ProfileQuote({ quotes }) {
  const [random, setRandom] = useState()

  const myRandomNumber = () => {
    let randomChoose = parseInt(Math.floor(Math.random() * (quotes.length)));
        setRandom(randomChoose)
    }

  useEffect(() => {
      myRandomNumber();
  }, [random])

console.log(quotes)
console.log(random)
// console.log(quotes[random].sentence)

// console.log(quotes)
// console.log(randomChoose)
// console.log(char)


  return (
    <div className='p-2'>
      {/* {quotes.filter((item, index, array) => {
        return index === number;
      }).map(quote => <p key={quote.sentence}>{`"${quote.sentence}"`}</p>)} */}
     <p>{}</p>
    </div>
  )

};

export default ProfileQuote;