import React, { useState } from "react";
import { socket } from "../../App";

export default function Users() {
  const [room, setRoom] = useState("");
  const [user, setUser] = useState("");
  const [players, setPlayers] = useState([]);

  socket.on("recieveData", (room, user, players) => {
    setRoom(room);
    setUser(user);
    setPlayers(players);
  });
  console.log(room, user, players);
  return (
    <>
      <h4>User Section</h4>
    </>
  );
}
