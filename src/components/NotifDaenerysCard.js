import React from 'react';
import { Link } from 'react-router-dom';

const NotifDaenerysCard = ({ daenerys, date }) => {
  return (
    <div className="">
      <ul className="mx-2 shadow-color-font-dark shadow-md rounded-2xl ">
        <li className="flex flex-row justify-between items-center bg-color-winter-primary border-solid border rounded-2xl border-black	">
          <Link to={`/users/1`}>
            <img
              src={daenerys.imageUrl}
              alt={daenerys.firstName}
              className="rounded-full object-cover h-12 w-12 m-2"
            />
          </Link>
          <p className="flex justify-center mx-5 text-center text-sm">
            {' '}
            {daenerys.firstName} liked your
            profile photo
          </p>{' '}
          <p className="mx-4">{date}</p>
        </li>
      </ul>
    </div>
  );
};

export default NotifDaenerysCard;
