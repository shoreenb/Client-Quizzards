import React, { useEffect, useState } from "react";
import { socket } from "../../App";
import axios from "axios";

export default function RandomWord() {
  const [category, setCatergory] = useState("");

  const [data, setData] = useState("");
  const [error, setError] = useState("");

  socket.on("recieveCatergory", (room, catergoryInput) => {
    console.log("Hello from rC", catergoryInput);
    setCatergory(catergoryInput);
  });

  // Getting length of catergory array
  useEffect(() => {
    const getWords = async (category) => {
      if (category) {
        try {
          const { data } = await axios.get(
            `https://quizzards-the-game.herokuapp.com/${category}`
          );
          setData(data);
        } catch (err) {
          setError(err);
        }
      }
    };
    getWords(category);
  }, [category]);

  console.log(data);

  return (
    <div className="randomWordContainer">
      <div>
        {error ? (
          <h3>{error}</h3>
        ) : (
          <h3 className="gameTitle">Catergory: {category}</h3>
        )}
      </div>
      <div>
        <p className="word"> Word That has to be blurred</p>
      </div>
    </div>
  );
}
