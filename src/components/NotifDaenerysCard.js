import React from 'react';

const NotifDaenerysCard = ( {daenerys} ) => {
  return (
<div>
<ul className='ml-2 mr-2'>
    <li className='flex flex-row items-center bg-color-winter-primary rounded-3xl border-solid border-2 border-black	'>
        <img src={daenerys.imageUrl} alt={daenerys.firstName} className="rounded-full w-20 h-20" />
        <p className='ml-10'> <span className='font-bold'>{daenerys.firstName}</span> liked your profile photo </p>    
    </li> 
</ul>
</div>
)};

export default NotifDaenerysCard
