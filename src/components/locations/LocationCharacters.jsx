import React from 'react';
import Profile_Interact_Button from '../Profile_Interact_Button';
import { Link } from 'react-router-dom';

export const LocationCharacters = ({ characters}) => {
  console.log(characters);
  return (
    <div>
      <div className="flex flex-row items-center justify-between 
      gap-4 m-4 rounded-2xl
      bg-color-winter-primary shadow-color-font-dark shadow-md">
        <Link to={`/users/${characters.id + 1}`}><img
          className="w-12 h-12 object-cover rounded-full m-2"
          src={characters.imageUrl}
          alt="#"
        /></Link>
        <h3 className='mx-4'>{characters.fullName}</h3>
      </div>
    </div>
  );
};
