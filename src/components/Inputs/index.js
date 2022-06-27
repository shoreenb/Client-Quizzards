import React, { useState, useEffect } from "react";
import { HomeBox } from "../index";

export default function Inputs() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  const updateUsername = (e) => {
    const input = e.target.value;
    setUsername(input);
    console.log(username);
  };

  const updateRoom = (e) => {
    const input = e.target.value;
    setRoom(input);
    console.log(room);
  };

  const handleSubmit = () => {};

  return (
    <>
      <form role="form" onSubmit={handleSubmit}>
        <label htmlFor="username"></label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          value={username}
          onChange={updateUsername}
        />
        <label htmlFor="room"></label>
        <input
          type="text"
          id="room"
          name="room"
          placeholder="Room"
          value={room}
          onChange={updateRoom}
        />
        <input type="submit" value="Join Room" />
      </form>
      <HomeBox username={username} room={room} />
    </>
  );
}
