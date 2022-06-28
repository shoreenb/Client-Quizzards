import React, { useState } from "react";
import { socket } from "../../App";

export default function RandomWord() {
  const [category, setCatergory] = useState("");

  socket.on("recieveCatergory", (room, catergoryInput) => {
    console.log("Hello from rC", catergoryInput);
    setCatergory(catergoryInput);
  });

  return <>{category ? <h3>{category}</h3> : <h3>Error</h3>}</>;
}
