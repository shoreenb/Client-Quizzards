import React, { useState, useEffect } from "react";
import { socket } from "../../App";
import ReactDOM from "react-dom";

export default function MessageBox() {
  const [messageInput, setMessageInput] = useState("");
  const [room, setRoom] = useState("");
  const [user, setUser] = useState("");
  const [players, setPlayers] = useState([]);
  const [messages, setMessages] = useState([]);

  // socket.on("recieveMessage,",()=>{
  //     displayMessage(message)
  // })

  socket.on("recieveData", (room, user, players) => {
    setPlayers(players);
  });

  const updateMessage = (e) => {
    const input = e.target.value;
    setMessageInput(input);
  };

  function displayMessage(message) {
    const container = React.createElement("div", {}, message);
    ReactDOM.render(container, document.getElementById("global"));
  }

  const handleSubmitMessage = (e) => {
    e.preventDefault();

    console.log(messageInput);
    socket.emit("sendMessage", messageInput, room);
    setMessages([...messages, messageInput]);
  };

  return (
    <>
      <div id="message-container">
        <div className="messages">
          {messages.map((message) => (
            <div key={message + Math.floor(Math.random() * 10 + 1)}>
              {message}
            </div>
          ))}
        </div>
      </div>

      <form
        id="message-input"
        action="javascript:void(0);"
        className=""
        onSubmit={handleSubmitMessage}
      >
        <label htmlFor="message"></label>
        <input
          type="text"
          id="message"
          name="message"
          placeholder="Message"
          className="textarea"
          value={messageInput}
          onChange={updateMessage}
        />

        <div className="form-nav">
          <button type="submit" className="send-message-btn">
            Send Message
          </button>
        </div>
      </form>
    </>
  );
}
