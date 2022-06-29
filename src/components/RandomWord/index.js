import React, { useEffect, useState } from "react";
import { socket } from "../../App";
import axios from "axios";

export default function RandomWord() {
  const [category, setCatergory] = useState("");
  const [data, setData] = useState("");
  const [word, setWord] = useState("");
  const [maskedWord, setMaskedWord] = useState("");
  const [error, setError] = useState("");

  const [state, setState] = useState(false);

  socket.on("recieveCatergory", (room, catergoryInput) => {
    setCatergory(catergoryInput);
  });

  // Getting data of catergory array
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

  const changeState = () => {
    if (state) {
      setState(false);
    } else {
      setState(true);
    }
  };

  useEffect(() => {
    const randomWord = (int, data) => {
      const randomInt = Math.floor(Math.random() * int);
      setWord(data[randomInt]);
      // console.log(randomInt);
    };
    randomWord(data.length, data);
  }, [state]);

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
        <button onClick={changeState}>Random Word</button>
        <p className="word">
          {word
            ? word.word.split("").fill("_").join(" ")
            : "Press Start To Begin"}
        </p>
      </div>
    </div>
  );
}
// randomWord(data.length, data)
