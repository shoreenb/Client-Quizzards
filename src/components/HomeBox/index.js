import React, { useState } from "react";
import { socket } from "../../App";
import { useNavigate } from "react-router-dom";

export default function HomeBox({ startReady, room, user }) {
  const [roomText, setRoomText] = useState("");
  const [players, setPlayers] = useState([]);
  const [host, setHost] = useState(false);
  const [catergoryInput, setCatergoryInput] = useState("animals");
  const [modeInput, setModeInput] = useState("Easy");

  const navigate = useNavigate();

  socket.on("attachRoom", (room) => {
    setRoomText(room);
    /* playersArea.textContent = socket.id; */
  });

  socket.on("maxPartyError", (room) => {
    setRoomText(`The maxed room size for ${room} has been reached!`);
  });

  socket.on("addPlayer", (newPlayers, room) => {
    setPlayers([...newPlayers]);
  });
  socket.on("addMe", (newPlayers, room, isHost) => {
    setHost(isHost);

    setPlayers([...newPlayers]);
  });

  const handleSendData = (e) => {
    e.preventDefault();

    socket.emit(
      "sendData",
      room,
      user,
      players,
      catergoryInput,
      modeInput,
      host
    );
    socket.emit("navigateAllPlayers", room);

    navigate("/game", { replace: true });
  };

  socket.on("navigateToGame", () => {
    socket.emit(
      "sendData",
      room,
      user,
      players,
      catergoryInput,
      modeInput,
      host
    );
    navigate("/game", { replace: true });
  });

  // Category Select

  const updateCatergory = (e) => {
    const input = e.target.value;
    setCatergoryInput(input);
  };

  // Mode Select

  const updateMode = (e) => {
    const input = e.target.value;
    setModeInput(input);
  };

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
      <form
        action="javascript:void(0);"
        className="catergory-form"
        onSubmit={handleSendData}
      >
        <label htmlFor="category"></label>
        <select
          id="category"
          name="category"
          disabled={!host}
          className="select-box"
          value={catergoryInput}
          onChange={updateCatergory}
        >
          <option value="animals">Animals</option>
          <option value="food">Food</option>
          <option value="random">Random</option>
        </select>

        <label htmlFor="mode"></label>
        <select
          id="mode"
          name="mode"
          disabled={!host}
          className="select-box"
          value={modeInput}
          onChange={updateMode}
        >
          <option value="Easy">Easy Mode</option>
          <option value="Hard">Blind Mode</option>
        </select>

        <button className="start-btn" disabled={!host} type="submit">
          Start game!
        </button>
      </form>
    </>
  );
}
