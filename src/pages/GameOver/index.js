import React from "react";
import Fireworks from "../../components/video/fireworks.mp4";
import { useNavigate } from "react-router-dom";
import { socket } from "../../App";

const GameOver = () => {
  const navigate = useNavigate();

  // socket.on("navigateToGame", () => {
  //     socket.emit("sendData", room, user, players, catergoryInput, host);
  //     navigate("/game", { replace: true });
  //   });

  const handleSendData = (e) => {
    // e.preventDefault();
    // socket.emit("sendData", room, user, players, catergoryInput, host);
    // socket.emit("navigateAllPlayers", room);

    navigate("/gameover", { replace: true });
  };
  return (
    <>
      <div className="home">
        <h1 className="congrats">Congratulations (username)!</h1>
      </div>
      <div className="fireworks">
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1",
          }}
        >
          <source src={Fireworks} type="video/mp4" />
        </video>
        <div className="grid">
          <div className="box box1">
            <button
              onClick={() => navigate("/")}
              id="myButton"
              className="float-left submit-button"
            >
              Play Again?
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameOver;

// "window.location.href('https://www.youtube.com/results?search_query=how+to+style+buttons+react'
