import React, { useState } from "react";
import {
  Canvas,
  DisplayBox,
  MessageBox,
  Users,
  Countdown,
  RandomWord,
} from "../../components";
import { socket } from "../../App";

import "../../App.css";

const Game = () => {
  const [room, setRoom] = useState("");
  const [user, setUser] = useState("");
  const [players, setPlayers] = useState([]);
  const [points, setPoints] = useState(0);

  socket.on("recieveData", (roomData, userData, playersData) => {
    setPlayers([...playersData]);
    setRoom(roomData);
    setUser(userData);
  });

  return (
    <>
      <div className="bkImgGame"></div>
      <div className="gamePageContainer">
        <div className="randomWord">
          <RandomWord />
        </div>
        <div className="UserComponent">
          <Countdown />
          <Users room={room} user={user} players={players} points={points} />
        </div>
        <div className="canvasApp">
          <Canvas width={700} height={500} />
        </div>
        <div className="messageBoxComponent">
          <MessageBox room={room} user={user} players={players} />
        </div>
      </div>
    </>
  );
};

export default Game;
