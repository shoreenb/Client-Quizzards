import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Game, Home, NotFound } from "./pages";
import "./App.css";
import { io } from "socket.io-client";

export const socket = io("http://localhost:5000");

const App = () => {
  useEffect(() => {});
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
