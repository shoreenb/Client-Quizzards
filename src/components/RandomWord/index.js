import React, { useEffect, useState } from "react";
import { socket } from "../../App";

export default function RandomWord({ catergoryChoice, error, room }) {
  const [word, setWord] = useState("");
  const [allWords, setAllWords] = useState("");
  const [catergory, setCatergory] = useState("");

  socket.on("recieveAllWords", (data) => {
    setAllWords(data);
  });

  socket.on("recieveCatergory", (catergoryChoice) => {
    setCatergory(catergoryChoice);
  });

  socket.on("recieveCatergoryHost", (catergoryChoice, room) => {
    console.log(catergoryChoice);
    setCatergory(catergoryChoice);
  });

  const handleNewWord = () => {
    const wordObj = allWords[[Math.floor(Math.random() * allWords.length)]];
    // setWord visible to only active player --> send masked word to everyone else
    const randomWord = wordObj.word;
    socket.emit("sendRandomWord", randomWord, room);

    setWord(randomWord);
  };
  console.log(allWords);

  socket.on("recieveRandomWord", (randomWord) => {
    setWord(randomWord);
    // setCatergory(catergoryChoice);
  });

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
        <button onClick={handleNewWord}>Random Word</button>
        <p className="word">{word ? word : "Press Start To Begin"}</p>
      </div>
    </div>
  );
}
// randomWord(data.length, data)
// allWords.word.split("").fill("_").join(" ")
//!== ""
