import React from "react";
import { Canvas } from "../../components";
import { MessageBox } from "../../components";
import { CountdownApp } from "../../components";

const Game = () => {
  return (
    <>
      <div className="canvasApp">
        <Canvas width={1000} height={600} />
      </div>
      <CountdownApp />
      <MessageBox/>
    </>
  );
};

export default Game;
