import React, { useEffect, useState } from "react";
import { socket } from "../../App";

export default function RandomWord({ catergoryChoice, error, room }) {
  const [word, setWord] = useState("");
  const [allWords, setAllWords] = useState("");
  // const [maskedWord, setMaskedWord] = useState("");
  // const [state, setState] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (allWords) {
  //       console.log(allWords);
  //       setWord(allWords[[Math.floor(Math.random() * allWords.length)]]);
  //       console.log(word);
  //     }
  //   }, 1000);
  // }, [state]);

  // const stateChange = () => {
  //   setState(!state);
  // };

  socket.on("recieveAllWords", (data) => {
    setAllWords(data);
  });

  const handleNewWord = () => {
    const wordObj = allWords[[Math.floor(Math.random() * allWords.length)]];
    console.log(wordObj);

    const randomWord = wordObj.word;
    setWord(randomWord);
  };
  console.log(allWords);

  return (
    <div className="randomWordContainer">
      <div>
        {error ? (
          <h3>{error}</h3>
        ) : (
          <h3 className="gameTitle">Catergory: {catergoryChoice}</h3>
        )}
      </div>
      <div>
        <button onClick={handleNewWord}>Random Word</button>
        <p className="word">{word ? word : "Press Start To Begin"}</p>
      </div>
    </div>
  );
}
// randomWord(data.length, data)
// allWords.word.split("").fill("_").join(" ")
//!== ""
