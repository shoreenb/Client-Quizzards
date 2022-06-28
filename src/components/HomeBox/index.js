import React, { useState } from "react";
import { socket } from "../../App";

export default function HomeBox({ startReady, room, user }) {
  const [roomText, setRoomText] = useState("");
  const [players, setPlayers] = useState([]);

  socket.on("attachRoom", (room) => {
    setRoomText(room);
    /* playersArea.textContent = socket.id; */
  });

  socket.on("addPlayer", (newPlayers, room) => {
    setPlayers([...newPlayers]);
  });
  window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
  });

  const handleSendData = (e) => {
    e.preventDefault();
    socket.emit("sendData", room, user, players);
  };

  return (
    <>
      <div className="home-box">
        <p className="connection"></p>
        <h3>Room Name:</h3>
        <div className="room">{roomText}</div>
        <h3>Players</h3>
        <div className="players">
          {players.map((player) => (
            <div key={player + Math.floor(Math.random() * 10 + 1)}>
              {player}
            </div>
          ))}
        </div>
      </div>
      <form action="javascript:void(0);" className="" onSubmit={handleSendData}>
        <button disabled={!startReady} type="submit">
          Start game!
        </button>
      </form>
    </>
  );
}
