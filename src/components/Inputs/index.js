import React, { useState } from "react";
import { HomeBox } from "../index";
import { socket } from "../../App";
export default function Inputs() {
  const [usernameInput, setUsernameInput] = useState("");
  const [roomInput, setRoomInput] = useState("");

  const [room, setRoom] = useState("");
  const [roomLocked, setRoomLocked] = useState(false);
  const [userLocked, setUserLocked] = useState(true);

  //Controlled forms
  const updateUsername = (e) => {
    const input = e.target.value;
    setUsernameInput(input);
  };

  const updateRoom = (e) => {
    const input = e.target.value;
    setRoomInput(input);
  };

  const handleSubmitRoom = (e) => {
    e.preventDefault();

    let chosenRoom = roomInput;
    setRoom(chosenRoom);
    setRoomLocked(true);
    setUserLocked(false);
    setRoomInput("");

    socket.emit("joinRoomPress", chosenRoom);
  };
  const handleSubmitUser = (e) => {
    e.preventDefault();

    let user = usernameInput;
    setUserLocked(true);
    setUsernameInput("");
    socket.emit("addUserPress", user, room);
  };

  return (
    <>
      <form
        action="javascript:void(0);"
        className=""
        onSubmit={handleSubmitRoom}
      >
        <label htmlFor="room"></label>
        <input
          type="text"
          id="room"
          name="room"
          placeholder="Room"
          value={roomInput}
          onChange={updateRoom}
          disabled={roomLocked}
        />

        <div className="form-nav">
          <button type="submit" className="join-btn">
            Join Room
          </button>
        </div>
      </form>

      <form
        action="javascript:void(0);"
        className=""
        onSubmit={handleSubmitUser}
      >
        <label htmlFor="username"></label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          value={usernameInput}
          onChange={updateUsername}
          disabled={userLocked}
        />{" "}
        <div className="form-nav">
          <button type="submit" className="username-btn">
            Select Username
          </button>
          <p className="arrow right"></p>
        </div>
      </form>

      <HomeBox />
    </>
  );
}
