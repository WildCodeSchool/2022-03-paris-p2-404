import React from 'react';

const NotifRamsayCard = ( {ramsay} ) => {
  return (
<div >
<ul className='ml-2 mr-2'>
    <li className='flex flex-row items-center bg-color-winter-primary rounded-3xl border-solid border-2 border-black mb-1'>
        <img src={ramsay.imageUrl} alt={ramsay.firstName} className="rounded-full w-20 h-20" />
        <p className='ml-10'> <span className='font-bold'>{ramsay.firstName}</span> send you a message "You are a bastard !" </p> 
    </li> 
    <li className='flex flex-row items-center bg-color-winter-primary rounded-3xl border-solid border-2 border-black	'>
        <img src={ramsay.imageUrl} alt={ramsay.firstName} className="rounded-full w-20 h-20" />
        <p className='ml-10'> <span className='font-bold'>{ramsay.firstName}</span>  send you a duel request </p> 
    </li> 
</ul>
</div>
)};

export default NotifRamsayCard