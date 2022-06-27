import React, { useState, useEffect } from "react";
import { HomeBox } from "../index";

export default function Inputs() {
  const [usernameInput, setUsernameInput] = useState("");
  const [roomInput, setRoomInput] = useState("");
  const [userData, setUserData] = useState({ username: "", room: "" });

  const updateUsername = (e) => {
    const input = e.target.value;
    setUsernameInput(input);
  };

  const updateRoom = (e) => {
    const input = e.target.value;
    setRoomInput(input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData({ username: usernameInput, room: roomInput });
  };

  return (
    <>
      <form role="form" onSubmit={handleSubmit}>
        <label htmlFor="username"></label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          value={usernameInput}
          onChange={updateUsername}
        />
        <label htmlFor="room"></label>
        <input
          type="text"
          id="room"
          name="room"
          placeholder="Room"
          value={roomInput}
          onChange={updateRoom}
        />
        <input type="submit" value="Join Room" />
      </form>
      <HomeBox username={userData.username} room={userData.room} />
    </>
  );
}
