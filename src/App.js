import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Game, Home, NotFound } from "./pages";
import "./App.css";
import { io } from "socket.io-client";
import GameOver from "./pages/GameOver";

// export const socket = io("http://localhost:5000");
export const socket = io("https://quizzards-the-game.herokuapp.com/");

const App = () => {
  useEffect(() => {});
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/gameover" element={<GameOver />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
