import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import maps from '../../../assets/icons/maps.png';
import { LocationCharacters } from '../LocationCharacters';

export const TheReachUsersList = () => {
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
    bg-white transition-all"
    >
      <div
        className="titlenorthusers
        flex flex-row justify-center items-center gap-4 my-8 mx-8"
      >
        <img src={maps} alt="#" className="w-12 h-12" />
        <h2 className="">The Reach</h2>
      </div>

      <div className="my-8">
        {characters
          .filter(
            (character) =>
              character.firstName.includes('Olenna')
          )

          .map((characters, index) => (
            <div key={index}>
              <LocationCharacters characters={characters}/>
            </div>
          ))}
      </div>
    </div>
  );
};
