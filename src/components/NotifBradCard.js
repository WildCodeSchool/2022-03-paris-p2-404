import React from 'react';

const NotifBradCard = ( {brad, date} ) => {
  return (
<div >
<ul className='mx-2 shadow-color-font-dark shadow-md rounded-2xl'>
    <li className='flex flex-row justify-between items-center bg-color-winter-primary border-solid border rounded-2xl border-black	'>
        <img src={brad.imageUrl} alt={brad.firstName} className="rounded-full object-cover h-12 w-12 m-2" />
        <p><span className='font-bold'>{brad.firstName}</span> liked your post </p> <p className='mx-4 '>{date}</p> 
    </li> 
</ul>
</div>
)};

export default NotifBradCard