import React, { useState } from "react";
import { HomeBox } from "../index";
import { socket } from "../../App";
export default function Inputs() {
  const [usernameInput, setUsernameInput] = useState("");
  const [roomInput, setRoomInput] = useState("");

  const [user, setUser] = useState("");
  const [room, setRoom] = useState("");
  const [roomLocked, setRoomLocked] = useState(false);
  const [userLocked, setUserLocked] = useState(true);
  const [startReady, setStartReady] = useState(false);

  //Controlled forms
  const updateUsername = (e) => {
    const input = e.target.value;
    setUsernameInput(input);
  };

  const updateRoom = (e) => {
    const input = e.target.value;
    setRoomInput(input);
  };
  //Pressing join room
  const handleSubmitRoom = (e) => {
    e.preventDefault();
    if (roomInput == "") return;
    let chosenRoom = roomInput;
    setRoom(chosenRoom);
    setRoomLocked(true);
    setUserLocked(false);
    setRoomInput("");

    socket.emit("joinRoomPress", chosenRoom);
  };

  //If room is full

  socket.on("maxPartyError", (room) => {
    setRoom("");
    setRoomLocked(false);
    setUserLocked(true);
    setRoomInput("");
  });

  //Press add username
  const handleSubmitUser = (e) => {
    e.preventDefault();

    let chosenUser = usernameInput;
    setUser(chosenUser);
    setUserLocked(true);
    setStartReady(true);
    setUsernameInput("");
    socket.emit("addUserPress", chosenUser, room);
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
        />
        <div className="form-nav">
          <button type="submit" className="username-btn">
            Select Username
          </button>
          <p className="arrow right"></p>
        </div>
      </form>

      <HomeBox startReady={startReady} room={room} user={user} />
    </>
  );
}
