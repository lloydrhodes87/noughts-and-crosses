import React from 'react';

const Player = ({ player, score }) => {
  return (
    <div>
      <h3>{player}</h3>
      <p>{score}</p>
    </div>
  );
};

// <p>{player === "player1" ? player1 : player2}</p>
export default Player;