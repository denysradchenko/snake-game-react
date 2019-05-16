import React from 'react';
import './GameOver.css'

const GameOver = ({ newGame }) => {
  return (
    <div className="GameOver">
      <div className="alert alert-danger" role="alert">
        <h4>Game Over</h4>
        <button onClick={newGame} className="btn btn-success">Restart</button>
      </div>
    </div>
  );
}

export default GameOver;
