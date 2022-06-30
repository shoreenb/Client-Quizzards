import React, { useState, useEffect, useRef } from "react";
import { socket } from "../../App";

import blank from "../../img/blankImage";

export default function NewCanvas({
  room,
  user,
  players,
  activePlayer,
  activePlayerTrue,
}) {
  const [color, setColor] = useState("#000000");
  const [size, setSize] = useState("3");
  const [prevImage, setPrevImage] = useState("");
  const [hardMode, setHardMode] = useState(false);
  const [activeDrawer, setActiveDrawer] = useState("");
  const [activeCanvas, setActiveCanvas] = useState(false);
  let ctx;

  useEffect(() => {
    drawOnCanvas();
  }, []);

  useEffect(() => {
    let test = document.querySelector(".sketch");
    setActiveCanvas(activePlayerTrue);
    setActiveDrawer(activePlayer);
    console.log(activePlayerTrue);
    if (!activePlayerTrue) {
      test.style.pointerEvents = "none";
    }
    if (activePlayerTrue) {
      test.style.pointerEvents = "auto";
    }

    if (activeCanvas) {
      if (hardMode) {
        console.log("mounting");
        setCanvas(blank);
        drawOnCanvas();
      }
    }
  });

  useEffect(() => {}, [activePlayer]);

  useEffect(() => {
    if (hardMode) return;
    if (activeCanvas) {
      drawOnCanvas();
      setCanvas(prevImage);
    }
  }, [size, color]);

  function setCanvas(data) {
    let image = new Image();
    let canvas = document.querySelector("#board");
    ctx = canvas.getContext("2d");
    image.src = data;
    image.onload = function () {
      ctx.drawImage(image, 0, 0);
    };
  }

  const changeColor = (e) => {
    let colorChoice = e.target.value;
    setColor(colorChoice);
  };
  const changeSize = (e) => {
    let sizeChoice = e.target.value;
    setSize(sizeChoice);
  };

  let timeout;

  socket.on("canvas-data", function (data) {
    let image = new Image();
    let canvas = document.querySelector("#board");
    ctx = canvas.getContext("2d");
    image.src = data;
    image.onload = function () {
      ctx.drawImage(image, 0, 0);
    };
  });

  function drawOnCanvas() {
    const canvas = document.querySelector("#board");
    const ctx = canvas.getContext("2d");
    const sketch = document.querySelector("#sketch");
    const sketch_style = getComputedStyle(sketch);
    canvas.width = parseInt(sketch_style.getPropertyValue("width"));
    canvas.height = parseInt(sketch_style.getPropertyValue("height"));

    let mouse = { x: 0, y: 0 };
    let last_mouse = { x: 0, y: 0 };

    /* Mouse Capturing Work */
    canvas.addEventListener(
      "mousemove",
      function (e) {
        last_mouse.x = mouse.x;
        last_mouse.y = mouse.y;

        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
      },
      false
    );

    /* Drawing on Paint App */
    ctx.lineWidth = size;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.strokeStyle = color;

    canvas.addEventListener(
      "mousedown",
      function (e) {
        canvas.addEventListener("mousemove", onPaint, false);
      },
      false
    );

    canvas.addEventListener(
      "mouseup",
      function () {
        canvas.removeEventListener("mousemove", onPaint, false);
      },
      false
    );

    let onPaint = function () {
      ctx.beginPath();
      ctx.moveTo(last_mouse.x, last_mouse.y);
      ctx.lineTo(mouse.x, mouse.y);
      ctx.closePath();
      ctx.stroke();
      if (timeout != undefined) clearTimeout(timeout);
      timeout = setTimeout(function () {
        let base64ImageData = canvas.toDataURL("image/png");

        setPrevImage(base64ImageData);

        socket.emit("canvas-data", base64ImageData, room);
      }, 1000);
    };
  }
  return (
    <>
      <div className="board-container">
        <div className="tools-section">
          <div className="color-picker">
            Select Brush Color: &nbsp;
            <input
              disabled={!activeCanvas}
              type="color"
              onChange={changeColor}
            />
          </div>
          <div className="size-picker">
            Select Brush Size: &nbsp;
            <select disabled={!activeCanvas} onChange={changeSize}>
              <option> 3 </option>
              <option> 6 </option>
              <option> 9 </option>
              <option> 12 </option>
              <option> 15 </option>
            </select>
          </div>
        </div>

        <div id="sketch" className="sketch">
          <canvas className="board" id="board"></canvas>
        </div>
      </div>
    </>
  );
}
