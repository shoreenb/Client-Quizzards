import React, { useState } from "react";
import { socket } from "../../App";

export default function RandomWord() {
  const [category, setCatergory] = useState("");

  socket.on("recieveCatergory", (room, catergoryInput) => {
    console.log("Hello from rC", catergoryInput);
    setCatergory(catergoryInput);
  });

  return (
    <div className="randomWordContainer">
      <div>
        {category ? (
          <h3 className="gameTitle">Catergory: {category}</h3>
        ) : (
          <h3>Error</h3>
        )}
      </div>
      <div>
        <p className="word"> Word That has to be blurred</p>
      </div>
    </div>
  );
}
