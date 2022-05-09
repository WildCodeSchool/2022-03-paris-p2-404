import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

export const Comment = ({ comments, completeComments }) => {
  const [characters, setCharacters] = useState([]);
  const url = "https://thronesapi.com/api/v2/Characters";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => setCharacters(data));
  }, []);

  return comments.map((comment, index) => (
    <div
      className={comment.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div
        key={comment.id}
        onClick={() => completeComments(comment.id)}
        className="flex  flex-row gap-4 mx-4 my-0.5 border-t border-black p-4 bg-color-winter-primary"
      >
        <div className="flex flex-row items-start gap-4">
          <div>
            <img
              src={characters[2].imageUrl}
              alt="#"
              className="rounded-full w-12 h-auto
       "
            />
          </div>
          <div>
            <h3 className="flex flex-row font-bold font-got">
              {characters[2].fullName}
            </h3>
            <p className="font-light">The wall, today </p>
          </div>
        </div>
        <div className="flex justify-center items-center text-center bg-opacity-40 rounded-md w-8/12 ">
          "{comment.text}"
        </div>
      </div>
    </div>
  ));
};
