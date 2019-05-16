import React, { Component } from 'react';
import SnakeService from './service/SnakeService';
import GameBoard from './GameBoard';
import './Game.css';
import GameOver from './GameOver'

class Game extends Component {
  interval = null;

  SnakeService = new SnakeService();

  state = this.SnakeService.getInitGame();

  refreshApple = () => {
    const { colSize, rowSize, snake } = this.state;
    const apple = this.SnakeService.getNewApple(colSize, rowSize, snake);
    this.setState({ apple });
  }

  snakeMovement = () => {
    const { colSize, rowSize, snake, apple } = this.state;
    const newState = this.SnakeService.getActualBoard(colSize, rowSize, apple, snake, this.props.direction);

    if (newState === "gameover") {
      clearInterval(this.interval);
      this.setState({ gameOver: true })
      return;
    }

    this.setState(newState)
  }

  componentDidMount() {
    document.addEventListener("keydown", this.props.handleKeyDown);
    this.interval = setInterval(this.snakeMovement, 150);
  }

  render() {
    const { colSize, rowSize, snake, apple, gameOver } = this.state;
    return (
      <div className="Game">
        <GameBoard
          colSize={colSize}
          rowSize={rowSize}
          snake={snake}
          apple={apple}
        />
        {gameOver ? <GameOver newGame={this.props.newGame} /> : null}
      </div>
    );
  }
}

export default Game;
