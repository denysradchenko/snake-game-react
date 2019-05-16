import React from 'react';
import './GameOver.css'

const GameOver = ({ newGame }) => {
  return (
    <div className="GameOver">
      <h4>Game Over</h4>
      <button onClick={newGame}>New game</button>
    </div>
  );
}

export default GameOver;
