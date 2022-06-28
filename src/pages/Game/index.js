import React from "react";
import { Canvas } from "../../components";
import { MessageBox } from "../../components";

const Game = () => {
  return (
    <>
      <div className="canvasApp">
        <Canvas width={1000} height={600} />
      </div>
      <MessageBox/>
    </>
  );
};

export default Game;
