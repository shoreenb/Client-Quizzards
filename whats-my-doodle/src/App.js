import React from "react";
import { Routes, Route } from "react-router-dom";
import { Game, Home, NotFound } from "./pages";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
