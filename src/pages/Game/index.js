import React from "react";
import { Canvas } from "../../components";
import { CountdownApp } from "../../components";

const Game = () => {
  return (
    <div className="canvasApp">
      <CountdownApp />
      <Canvas width={500} height={300} />
      <h1>Start Drawing!</h1>
    </div>
  );
};

export default Game;
