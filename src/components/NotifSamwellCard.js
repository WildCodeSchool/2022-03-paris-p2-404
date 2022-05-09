import React from 'react';
import { Link } from 'react-router-dom';

const NotifSamwellCard = ({ samwell, date }) => {
  return (
    <div className="">
      <ul className="mx-2 shadow-color-font-dark shadow-md rounded-2xl">
        <li className="flex flex-row justify-between items-center bg-color-winter-primary border-solid border rounded-2xl border-black	">
        <Link to={`/users/2`}>
          <img
            src={samwell.imageUrl}
            alt={samwell.firstName}
            className="rounded-full object-cover h-12 w-12 m-2"
          />
          </Link>
          <p className='flex justify-center mx-5 text-center text-sm '>
            {samwell.firstName} sent you a
            friend request{' '}
          </p>{' '}
          <p className="mx-4">{date}</p>
        </li>
      </ul>
    </div>
  );
};

export default NotifSamwellCard;
