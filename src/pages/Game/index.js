import React from "react";
import {
  Canvas,
  DisplayBox,
  MessageBox,
  Users,
  Countdown,
} from "../../components";

import "../../App.css";

const Game = () => {
  return (
    <>
      <div className="bkImgGame"></div>
      <div className="gamePageContainer">
        <div className="UserComponent">
          <Countdown />
          <Users />
        </div>
        <div className="canvasApp">
          <Canvas width={700} height={500} />
        </div>
        <div className="messageBoxComponent">
          <MessageBox />
        </div>
      </div>
    </>
  );
};

export default Game;
