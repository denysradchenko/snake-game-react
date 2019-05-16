import React from 'react';
import Field from './Field';
import './GameBoard.css';

const GameBoard = ({ colSize, rowSize, snake, apple }) => {
  const fields = [];

  for (let i = 0; i < colSize; i++) {
    fields[i] = [];
    for (let j = 0; j < rowSize; j++) {
      const key = `${i + j}`;
      if (i === apple[0] && j === apple[1]) {
        fields[i][j] = <Field value="apple" key={key} />
      } else if (snake.some((el) => el.column === i && el.row === j)) {
        if (snake.find(el => el.column === i && el.row === j).head) {
          fields[i][j] = <Field value="snakehead" key={key} />
        } else {
          fields[i][j] = <Field value="snake" key={key} />
        }
      } else {
        fields[i][j] = <Field value="empty" key={key} />
      }
    }
  }

  const gameBoard = fields.map((el, i) => {
    const key = `col${i + 1}`;
    return <div className="column" key={key}>{el}</div>
  })

  return (
    <div className="GameBoard">
      {gameBoard}
    </div>
  );
}

export default GameBoard;
