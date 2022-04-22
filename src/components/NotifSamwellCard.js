import React from 'react'

const NotifSamwellCard = ({samwell}) => {
  return (
<div className=''>
    <ul className='ml-2 mr-2'>
        <li className='flex flex-row items-center bg-color-winter-primary rounded-3xl border-solid border-2 border-black	'> 
            <img src={samwell.imageUrl} alt={samwell.firstName} className="rounded-full w-20 h-20" />
             <p className='ml-10'><span className='font-bold'>{samwell.firstName}</span> send you a friend request </p> 
        </li>
    </ul>
</div>
  )
}

export default NotifSamwellCard