import React, { useState, useEffect } from "react";
import { socket } from "../../App";
import ReactDOM from "react-dom";

export default function MessageBox({ room, user, players }) {
  const [messageInput, setMessageInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [word, setWord] = useState("");

  socket.on("recieveMessage", (messageData, room, userData) => {
    setMessages([...messages, userData + " : " + messageData]);
    setTimeout(() => {
      updateScroll();
    }, 100);
  });
  socket.on("recieveRandomWord", (randomWord) => {
    setWord(randomWord);
  });

  function updateScroll() {
    let element = document.getElementById("messages");
    element.scrollTop = element.scrollHeight + 10;
  }

  const updateMessage = (e) => {
    const input = e.target.value;
    setMessageInput(input);
  };

  const handleSubmitMessage = (e) => {
    e.preventDefault();
    if (messageInput != "") {
      if (messageInput == word) {
        let correctGuess = messageInput.split("").fill("*").join(" ");
        socket.emit("sendMessage", correctGuess, room, user);
        setMessages([...messages, user + " : " + correctGuess]);
        socket.emit("sendPointChange", room, user);
      } else {
        socket.emit("sendMessage", messageInput, room, user);
        setMessages([...messages, user + " : " + messageInput]);
      }
      setMessageInput("");
      setTimeout(() => {
        updateScroll();
      }, 100);
    }
  };

  return (
    <>
      <div id="message-container">
        <div id="messages" className="messages">
          {messages.map((message) => (
            <div key={message}>{message}</div>
          ))}
        </div>

        <form
          id="message-input"
          action="javascript:void(0);"
          onSubmit={handleSubmitMessage}
        >
          <label htmlFor="message"></label>
          <input
            type="text"
            id="message"
            name="message"
            placeholder="Whats your guess?"
            className="textarea"
            value={messageInput}
            onChange={updateMessage}
          />

          <button type="submit" className="send-message-btn">
            Guess!
          </button>
        </form>
      </div>
    </>
  );
}
