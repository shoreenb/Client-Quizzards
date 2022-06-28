import React, { useState, useEffect } from "react";
import { socket } from "../../App";

export default function MessageBox() {
  const [messageInput, setMessageInput] = useState("");

  // socket.on("recieveMessage,",()=>{
  //     displayMessage(message)
  // })

  const updateMessage = (e) => {
    const input = e.target.value;
    setMessageInput(input);
  };

  const handleSubmitMessage = (e) => {
    e.preventDefault();

    console.log(messageInput);
    socket.emit("sendMessage", messageInput);
  };

  return (
    <>
      <form
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
