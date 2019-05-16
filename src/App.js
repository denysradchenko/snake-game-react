import React, { Component } from 'react';
import Game from './Game';
import GameFreeze from './GameFreeze';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  state = {
    direction: null
  }

  handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      this.setState({ direction: null });
      return;
    }
    if (e.keyCode < 37 || e.keyCode > 40) return;
    e.preventDefault();
    this.setState((prevState) => {
      if (prevState.direction === "ArrowUp" && e.key === "ArrowDown") return;
      if (prevState.direction === "ArrowDown" && e.key === "ArrowUp") return;
      if (prevState.direction === "ArrowLeft" && e.key === "ArrowRight") return;
      if (prevState.direction === "ArrowRight" && e.key === "ArrowLeft") return;
      return ({ direction: e.key })
    });
  }

  newGame = () => {
    this.setState({
      direction: null
    });
  }

  render() {
    const { direction } = this.state;
    return (
      <>
        {direction !== null ?
          <Game direction={direction} handleKeyDown={this.handleKeyDown} newGame={this.newGame} /> :
          <GameFreeze handleKeyDown={this.handleKeyDown} />
        }
      </>
    );
  }
}

export default App;
