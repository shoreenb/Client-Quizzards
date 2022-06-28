import React from "react";
import { socket } from "../../App";

export default function RandomWord() {
  socket.on("recieveCatergory", (room, catergoryInput) => {
    console.log(room, catergoryInput);
  });
  return (
    <>
      <h3>RandomWord</h3>
    </>
  );
}
