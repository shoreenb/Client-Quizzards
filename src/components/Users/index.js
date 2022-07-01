import React, { useState, useEffect } from "react";
import { socket } from "../../App";

export default function Users({ room, userCheck, players, activePlayer }) {
  const [allPoints, setAllPoints] = useState([]);

  useEffect(() => {
    socket.emit("sendPointsBegin", room);
  }, [room]);

  socket.on("recievePointBegin", (room, points) => {
    setAllPoints(points);
  });

  socket.on("recievePointChange", (room, points) => {
    setAllPoints(points);
  });

  return (
    <>
      <div className="userCardContainer">
        {allPoints.map((user) => (
          <div
            className={
              user.user == userCheck ? "userCard highlight" : "userCard"
            }
          >
            <h4 className="usernameCard">
              {activePlayer == user.user ? "✏️ " : ""}
              {user.user}
            </h4>
            <p className="usernamePoints">{user.points}</p>
          </div>
        ))}
      </div>
    </>
  );
}
