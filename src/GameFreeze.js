import React, { Component } from 'react';
import SnakeService from './service/SnakeService';
import GameBoard from './GameBoard';
import './GameFreeze.css';

class GameFreeze extends Component {

  SnakeService = new SnakeService();

  state = this.SnakeService.getInitGame();

  componentDidMount() {
    document.addEventListener("keydown", this.props.handleKeyDown);
  }

  render() {
    const { colSize, rowSize, snake, apple } = this.state;
    return (
      <div className="GameFreeze">
        <GameBoard
          colSize={colSize}
          rowSize={rowSize}
          snake={snake}
          apple={apple}
        />
      </div>
    );
  }
}

export default GameFreeze;
