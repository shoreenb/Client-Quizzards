import React, { useState } from "react";
import { socket } from "../../App";

export default function Users() {
  const [room, setRoom] = useState("");
  const [user, setUser] = useState("");
  const [players, setPlayers] = useState([]);
  const [points, setPoints] = useState(0);

  socket.on("recieveData", (room, user, players) => {
    setRoom(room);
    setUser(user);
    setPlayers(players);
  });

  return (
    <>
      <div className="userCardContainer">
        {players.map((user) => (
          <div className="userCard">
            <h4 className="usernameCard">{user}</h4>
            <p className="usernamePoints">{points}</p>
          </div>
        ))}
      </div>
    </>
  );
}
