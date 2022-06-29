import React, { useEffect, useState } from "react";
import { socket } from "../../App";
import axios from "axios";

export default function RandomWord() {
  const [category, setCatergory] = useState("");
  const [error, setError] = useState("");

  socket.on("recieveCatergory", (room, catergoryInput) => {
    console.log("Hello from rC", catergoryInput);
    setCatergory(catergoryInput);
  });
  useEffect(() => {
    const getWords = async (category) => {
      try {
        const data = await axios.get(
          `https://quizzards-the-game.herokuapp.com/${category}`
        );
        console.log(data);
      } catch (err) {
        setError(err);
      }
    };
    getWords(category);
  }, [category]);
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
