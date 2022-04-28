import React from 'react';
import { Link } from 'react-router-dom';

const NotifDaenerysCard = ({ daenerys, date }) => {
  return (
    <div className="">
      <ul className="mx-2 shadow-color-font-dark shadow-md rounded-2xl ">
        <li className="flex flex-row justify-between items-center bg-color-winter-primary border-solid border rounded-2xl border-black	">
          <Link to={`/users/0`}>
            <img
              src={daenerys.imageUrl}
              alt={daenerys.firstName}
              className="rounded-full object-cover h-12 w-12 m-2"
            />
          </Link>
          <p className="">
            {' '}
            <span className="font-bold">{daenerys.firstName}</span> liked your
            profile photo
          </p>{' '}
          <p className="mx-4">{date}</p>
        </li>
      </ul>
    </div>
  );
};

export default NotifDaenerysCard;
