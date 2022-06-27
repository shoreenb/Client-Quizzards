import React from "react";

export default function HomeBox({ username, room }) {
  return (
    <div className="home-box">
      <h3>Room Name:</h3>
      <div className="room">{room}</div>
      <h3>Players</h3>
      <div className="players">{username}</div>{" "}
    </div>
  );
}
