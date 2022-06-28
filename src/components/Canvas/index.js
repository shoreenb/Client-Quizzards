import { useOnDraw } from "./Hooks";
import { socket } from "../../App";
import React, { useState } from "react";

const Canvas = ({ width, height }) => {
  const [room, setRoom] = useState("");
  const [user, setUser] = useState("");
  const [players, setPlayers] = useState([]);

  socket.on("recieveData", (roomData, userData, playersData) => {
    setPlayers([...playersData]);
    setRoom(roomData);
    setUser(userData);
  });

  const { setCanvasRef, onCanvasMouseDown } = useOnDraw(onDraw);

  function onDraw(ctx, point, prevPoint) {
    drawLine(prevPoint, point, ctx, "red", 5);
  }

  function drawLine(start, end, ctx, color, width) {
    start = start ?? end;
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(start.x, start.y, 2, 0, 2 * Math.PI);
    ctx.fill();
  }

  function allDraw() {
    onCanvasMouseDown();
    socket.emit("allDrawRequest", room);
  }

  socket.on("allDraw", () => {
    console.log("this works");
    onCanvasMouseDown();
  });

  return (
    <canvas
      width={width}
      height={height}
      onMouseDown={allDraw}
      style={canvasStyle}
      ref={setCanvasRef}
    />
  );
};

export default Canvas;

const canvasStyle = {
  border: "1px solid black",
};
