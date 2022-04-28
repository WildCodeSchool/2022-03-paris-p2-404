import React from 'react';
import { Link } from 'react-router-dom';

const NotifSansaCard = ({ sansa, date }) => {
  return (
    <div className="">
      <ul className="mx-2 shadow-color-font-dark shadow-md rounded-2xl">
        <li className="flex flex-row justify-between items-center bg-color-winter-primary border-solid border rounded-2xl border-black	">
        <Link to={`/users/4`}>
          <img
            src={sansa.imageUrl}
            alt={sansa.firstName}
            className="rounded-full object-cover h-12 w-12 m-2"
          />
          </Link>
          <p>
            <span className="font-bold">{sansa.firstName}</span> send you a
            message "I miss you"{' '}
          </p>{' '}
          <p className="mx-4">{date}</p>
        </li>
      </ul>
    </div>
  );
};

export default NotifSansaCard;
