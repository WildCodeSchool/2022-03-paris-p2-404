import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import maps from '../../../assets/icons/maps.png';
import { LocationCharacters } from '../LocationCharacters';

export const KingsLandingUsersList = () => {
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
      className="northUsersList 
    w-full h-screen py-4
    bg-white transition-all"
    >
      <div
        className="titlenorthusers
        flex flex-row justify-center items-center gap-4 my-8 mx-8"
      >
        <img src={maps} alt="#" className="w-12 h-12" />
        <h2 className="">King's Landing</h2>
      </div>

      <div className="my-8 pb-32">
        {characters
          .filter(
            (character) =>
              character.firstName.includes('Qyburn')||
              character.firstName.includes('Grey')||
              character.firstName.includes('The High')||
              character.firstName.includes('Jorah')||
              character.firstName.includes('Tommen')||
              character.firstName.includes('Shae')||
              character.firstName.includes('Varys')||
              character.firstName.includes('Tyrion')||
              character.firstName.includes('Missandei')||
              character.firstName.includes('Margaery')||
              character.firstName.includes('Joffrey')||
              character.firstName.includes('Cersei')||
              character.firstName.includes('Brienne')||
              character.firstName.includes('Jamie')||
              character.firstName.includes('Daenerys')
      
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
