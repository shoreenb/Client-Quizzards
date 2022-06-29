import React, { useState } from "react";
import { socket } from "../../App";

export default function Users({ room, user, players, points }) {
  return (
    <>
      <div className="userCardContainer">
        {players.map((user) => (
          <div className="userCard">
            <h4 className="usernameCard">{user}</h4>
            <p className="usernamePoints">{points}</p>
          </div>
        ))}
      </div>
    </>
  );
}
