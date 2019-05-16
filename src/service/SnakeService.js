export default class SnakeService {
  getNewApple(colSize, rowSize, snake) {
    let result = null;

    const genNmbr = rng => Math.floor(Math.random() * rng);

    const appleCol = genNmbr(colSize);
    const appleRow = genNmbr(rowSize);
    result = [appleCol, appleRow];
    if (snake.some((el) => el.column === appleCol && el.row === appleRow)) {
      result = this.getNewApple(colSize, rowSize, snake)
    }
    return result;
  }

  getActualBoard(colSize, rowSize, apple, snake, direction) {
    // directions: "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"

    if (direction === "ArrowUp" && snake[0].row === 0) return 'gameover';
    if (direction === "ArrowDown" && snake[0].row === rowSize - 1) return 'gameover';
    if (direction === "ArrowLeft" && snake[0].column === 0) return 'gameover';
    if (direction === "ArrowRight" && snake[0].column === colSize - 1) return 'gameover';

    const oldSnake = [...snake];

    const newHead = {
      ...oldSnake[0]
    };

    let newApple = apple;

    oldSnake[0].head = false;


    if (direction === "ArrowUp") newHead.row -= 1;
    if (direction === "ArrowDown") newHead.row += 1;
    if (direction === "ArrowLeft") newHead.column -= 1;
    if (direction === "ArrowRight") newHead.column += 1;


    const newBody = [...oldSnake.slice(0, -1)];
    if (newHead.column === apple[0] && newHead.row === apple[1]) {
      newBody.push(oldSnake.slice(-1)[0]);
      newApple = this.getNewApple(colSize, rowSize, [newHead, ...newBody]);
    }

    const newSnake = [newHead, ...newBody];

    if (newBody.some(el => el.column === newHead.column && el.row === newHead.row)) return 'gameover';

    return {
      colSize,
      rowSize,
      apple: newApple,
      snake: newSnake
    }
  }

  getInitGame(colSize = 15, rowSize = 15) {
    return {
      colSize,
      rowSize,
      apple: [9, 7],
      snake: [{
          column: 4,
          row: 7,
          head: true
        },
        {
          column: 3,
          row: 7
        },
        {
          column: 2,
          row: 7
        }
      ]
    }
  }
}

// snake [ {column: position, row: position}, ..., ... ]
