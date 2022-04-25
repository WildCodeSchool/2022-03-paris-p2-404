import React from 'react';

const NotifBradCard = ( {brad} ) => {
  return (
<div className=''>
<ul className='ml-2 mr-2'>
    <li className='flex flex-row items-center bg-color-winter-primary rounded-3xl border-solid border-2 border-black	'>
        <img src={brad.imageUrl} alt={brad.firstName} className="rounded-full w-20 h-20" />
        <p className='ml-10'><span className='font-bold'>{brad.firstName}</span> liked your post </p> 
    </li> 
</ul>
</div>
)};

export default NotifBradCard