import React from 'react';
import Profile_Interact_Button from '../Profile_Interact_Button';

export const LocationCharacters = ({ characters }) => {
  console.log(characters);
  return (
    <div>
      <div className="flex flex-row items-center justify-between 
      gap-4 m-4 rounded-2xl
      bg-color-winter-primary shadow-color-font-dark shadow-md">
        <img
          className="w-12 h-12 rounded-full m-2"
          src={characters.imageUrl}
          alt="#"
        />
        <h3>{characters.fullName}</h3>
        <div className='mr-4'><Profile_Interact_Button/></div>
      </div>
    </div>
  );
};