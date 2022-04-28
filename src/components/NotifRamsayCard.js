import React from 'react';
import { Link } from 'react-router-dom';

const NotifRamsayCard = ({ ramsay, date }) => {
  return (
    <div>
      <ul className="mx-2  rounded-2xl">
        <li className="flex flex-row justify-between items-center bg-color-winter-primary border-solid border rounded-2xl border-black mb-4 shadow-color-font-dark shadow-md	">
        <Link to={`/users/35`}>
            <img
            src={ramsay.imageUrl}
            alt={ramsay.firstName}
            className="rounded-full object-cover h-12 w-12 m-2"
          />
          </Link>
          <p className="text-center">
            {' '}
            <span className="font-bold">{ramsay.firstName}</span> send you a
            message "You are a bastard !"{' '}
          </p>{' '}
          <p className="mx-4">{date}</p>
        </li>
        <li className="flex flex-row items-center justify-between bg-color-winter-primary border-solid border rounded-2xl border-black shadow-color-font-dark shadow-md		">
        <Link to={`/users/35`}>
          <img
            src={ramsay.imageUrl}
            alt={ramsay.firstName}
            className="rounded-full object-cover h-12 w-12 m-2"
          />
          </Link>
          <p>
            {' '}
            <span className="font-bold">{ramsay.firstName}</span> send you a
            duel request{' '}
          </p>{' '}
          <p className="mx-4 ">{date}</p>
        </li>
      </ul>
    </div>
  );
};

export default NotifRamsayCard;
