import React from "react";
import { HomeBox, Inputs, NewCanvas } from "../../components";

const Home = () => {
  return (
    <>
      <div id="bkImg"></div>
      <div className="home">
        <h1>What's My Doodle?</h1>
        <Inputs />
      </div>
      <NewCanvas />
    </>
  );
};

export default Home;
