import React, { useState } from "react";
import { socket } from "../../App";

export default function HomeBox() {
  const [roomText, setRoomText] = useState("");
  const [players, setPlayers] = useState([]);

  socket.on("attachRoom", (room) => {
    setRoomText(room);
    /* playersArea.textContent = socket.id; */
  });

  socket.on("addPlayer", (user, room) => {
    setPlayers([...players, user]);
  });
  window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
  });

  return (
    <>
      <div className="home-box">
        <p className="connection"></p>
        <h3>Room Name:</h3>
        <div className="room">{roomText}</div>
        <h3>Players</h3>
        <div className="players">
          {players.map((player) => (
            <p key={player + Math.floor(Math.random() * 10 + 1)}>{player}</p>
          ))}
        </div>
      </div>
      <button>Start game!</button>
    </>
  );
}
