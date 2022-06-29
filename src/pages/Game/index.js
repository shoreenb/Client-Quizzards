import React, { useState, useEffect } from "react";
import {
  NewCanvas,
  DisplayBox,
  MessageBox,
  Users,
  Countdown,
  RandomWord,
} from "../../components";
import { socket } from "../../App";

import "../../App.css";
import { io } from "socket.io-client";

const Game = () => {
  const [room, setRoom] = useState("");
  const [user, setUser] = useState("");
  const [players, setPlayers] = useState([]);
  const [catergory, setCatergory] = useState("");
  const [host, setHost] = useState(false);
  const [points, setPoints] = useState(0);
  const [activePlayer, setActivePlayer] = useState("");
  const [activePlayerTrue, setActivePlayerTrue] = useState(false);

  socket.on(
    "recieveData",
    (roomData, userData, playersData, catergory, host) => {
      setPlayers([...playersData]);
      setRoom(roomData);
      setUser(userData);
      setCatergory(catergory);
      setHost(host);
    }
  );
  let activePlayers;

  setTimeout(() => {
    activePlayers = [...players];
  }, 1000);

  useEffect(() => {
    if (host) {
      setActivePlayer(user);
    }
  }, [host]);

  useEffect(() => {
    if (host) {
      socket.emit("sendActivePlayerChange", activePlayer, room);
    }
  }, [activePlayer]);

  useEffect(() => {
    if (activePlayer != "") {
      if (user === activePlayer) {
        setActivePlayerTrue(true);
      }
    }
  }, [activePlayer]);

  socket.on("recieveActivePlayerChange", (activePlayerChange) => {
    setActivePlayer(activePlayerChange);
  });

  socket.on("recieveRemoveActivePlayer", (activePlayer) => {
    if (user == activePlayer) {
      setActivePlayerTrue(false);
    }
  });

  const getNextPlayer = () => {
    if (activePlayers.length == 1) {
      setActivePlayer(activePlayers[0]);
    }
    if (activePlayers.length == 0) {
      //Navigate here
    }

    const randomPlayer =
      activePlayers[Math.floor(Math.random() * activePlayers.length)];
    if (user == activePlayer) {
      setActivePlayerTrue(false);
    }
    socket.emit("sendRemoveActivePlayer", activePlayer, room);
    setActivePlayer(randomPlayer);
    activePlayers.splice(activePlayers.indexOf(randomPlayer), 1);
  };
  /* setActivePlayer(activePlayers.findIndex); */

  return (
    <>
      <div className="bkImgGame"></div>
      <div className="randomWord">
        <button onClick={getNextPlayer}>Press me</button>
        <RandomWord
          catergoryChoice={catergory}
          activePlayerTrue={activePlayerTrue}
        />
      </div>
      <div className="gamePageContainer">
        <div className="UserComponent">
          <Countdown />
          <Users room={room} user={user} players={players} points={points} />
        </div>
        <div className="canvas-container">
          <NewCanvas
            room={room}
            user={user}
            players={players}
            activePlayer={activePlayer}
            activePlayerTrue={activePlayerTrue}
          />
        </div>

        <MessageBox room={room} user={user} players={players} />
      </div>
    </>
  );
};

export default Game;
