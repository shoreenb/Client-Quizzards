import React, { useState, useEffect } from "react";
import { socket } from "../../App";

export default function NewCanvas() {
  setTimeout(() => {
    drawOnCanvas();
  }, 1000);

  function drawOnCanvas() {
    console.log("first");
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
    ctx.lineWidth = 2;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.strokeStyle = "blue";

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

    var onPaint = function () {
      ctx.beginPath();
      ctx.moveTo(last_mouse.x, last_mouse.y);
      ctx.lineTo(mouse.x, mouse.y);
      ctx.closePath();
      ctx.stroke();
    };
  }
  return (
    <>
      <div className="color-picker">
        <input type="color" />{" "}
      </div>
      <div className="board-container">
        <div id="sketch" className="sketch">
          <canvas className="board" id="board"></canvas>
        </div>
      </div>
    </>
  );
}
