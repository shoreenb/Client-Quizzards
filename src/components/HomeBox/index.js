import React, { useState } from "react";
import { socket } from "../../App";
import { useNavigate } from "react-router-dom";

export default function HomeBox({ startReady, room, user }) {
  const [roomText, setRoomText] = useState("");
  const [players, setPlayers] = useState([]);

  const navigate = useNavigate();

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
    socket.emit("navigateAllPlayers", room);
    navigate("/game", { replace: true });
  };

  socket.on("navigateToGame", () => {
    socket.emit("sendData", room, user, players);
    navigate("/game", { replace: true });
  });

  return (
    <>
      <div className="home-box">
        <p className="connection"></p>
        <h3>Room Name:</h3>
        <div className="room">{roomText}</div>
        <h3>Players:</h3>
        <div className="players">
          {players.map((player) => (
            <div key={player + Math.floor(Math.random() * 10 + 1)}>
              {player}
            </div>
          ))}
        </div>
      </div>
      <form action="javascript:void(0);" className="" onSubmit={handleSendData}>
        <button className="start-btn" disabled={!startReady} type="submit">
          Start game!
        </button>
      </form>
    </>
  );
}
