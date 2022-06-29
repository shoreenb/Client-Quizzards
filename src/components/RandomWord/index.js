import React, { useEffect, useState } from "react";
import { socket } from "../../App";
import axios from "axios";

export default function RandomWord({ catergoryChoice }) {
  const [catergory, setCatergory] = useState("");
  const [allWords, setAllWords] = useState("");
  const [word, setWord] = useState("");
  const [maskedWord, setMaskedWord] = useState("");
  const [error, setError] = useState("");

  const [state, setState] = useState(false);

  // Getting data of catergory array

  useEffect(() => {
    setCatergory(catergoryChoice);
  }, []);

  useEffect(() => {
    const getWords = async (catergoryChoice) => {
      if (catergoryChoice) {
        try {
          const { data } = await axios.get(
            `https://quizzards-the-game.herokuapp.com/${catergoryChoice}`
          );
          console.log(data);
          setAllWords(data);
          setWord(data[0].word);
          console.log("first");
        } catch (err) {
          setError(err);
        }
      }
    };
    getWords(catergoryChoice);
  }, [catergory]);

  /* const changeState = () => {
    setState(!state);
  };

  useEffect(() => {
    changeWord()
  }, [state]); */

  function changeWord(data) {
    const randomWord = (int, data) => {
      const randomInt = Math.floor(Math.random() * int);
      setWord(data[randomInt]);
    };
    randomWord(data.length, data);
  }

  return (
    <div className="randomWordContainer">
      <div>
        {error ? (
          <h3>{error}</h3>
        ) : (
          <h3 className="gameTitle">Catergory: {catergory}</h3>
        )}
      </div>
      <div>
        {/* <button onClick={changeState}>Random Word</button> */}
        <p className="word">
          {word != ""
            ? word.word.split("").fill("_").join(" ")
            : "Press Start To Begin"}
        </p>
      </div>
    </div>
  );
}
// randomWord(data.length, data)
