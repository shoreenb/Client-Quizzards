import React from "react";
import { Canvas, MessageBox, Users } from "../../components";

const Game = () => {
  return (
    <div className="gamePageContainer">
      <div className="canvasApp">
        <Canvas width={700} height={500} />
      </div>
      <div className="messageBoxComponent">
        <MessageBox />
      </div>
      <div className="UserComponent">
        <Users />
      </div>
    </div>
  );
};

export default Game;
