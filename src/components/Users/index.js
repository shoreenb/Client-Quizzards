import React, { useState, useEffect } from "react";
import { socket } from "../../App";

export default function Users({ room, user, players }) {
  const [allPoints, setAllPoints] = useState([]);

  useEffect(() => {
    socket.emit("sendPointsBegin", room);
    console.log("here");
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
          <div className="userCard">
            <h4 className="usernameCard">{user.user} </h4>
            <p className="usernamePoints">{user.points}</p>
          </div>
        ))}
      </div>
    </>
  );
}
