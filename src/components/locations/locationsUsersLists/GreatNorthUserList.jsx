import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { LocationCharacters } from '../LocationCharacters';
import maps from '../../../assets/icons/maps.png';

export const GreatNorthUsersList = () => {
  const [characters, setCharacters] = useState([]);

  const url = 'https://thronesapi.com/api/v2/Characters';

  useEffect(() => {
    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => setCharacters(data));
  }, []);

  return (
    <div
      className="northUsersList customshadow
    w-full h-screen py-4
    bg-white transition-all "
    >
      <div
        className="titlenorthusers
        flex flex-row justify-center items-center gap-4 my-8 mx-8"
      >
        <img src={maps} alt="#" className="w-12 h-12" />
        <h2 className="">The Great North</h2>
      </div>

      <div className="my-8">
        {characters
          .filter(
            (character) =>
              character.firstName.includes('Ygritte') ||
              character.firstName.includes('Gilly') ||
              character.firstName.includes('Brandon') ||
              character.firstName.includes('Wylis') ||
              character.firstName.includes('Jon') ||
              character.firstName.includes('Tormund')
          )

          .map((characters, index) => (
            <div key={index} >
           <LocationCharacters characters={characters} />
            </div>
          ))}
      </div>
    </div>
  );
};
