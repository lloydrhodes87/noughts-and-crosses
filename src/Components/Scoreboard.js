import React from 'react';
import Player from './Player';

const Scoreboard = ({ handlePlayAgain, player1, player2, winner }) => {
  let message
  if (winner === "x") message = "Player 1 wins!"
  if (winner === "o") message = "Player 2 wins!"
  else if (winner === "draw") message = "The Game is a Draw!"

  return (
    <div className="scoreBoard">
      <Player player="Player 1" score={player1} />
      <div>
        <p>VS.</p>
        <button type="submit" onClick={handlePlayAgain} >Play Again!</button>
        <p>{message}</p>
      </div>
      <Player player="Player 2" score={player2} />
    </div>
  );
};



export default Scoreboard;