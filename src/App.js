import React, { Component } from 'react';
import './App.css';
import Board from './Components/Board';
import Scoreboard from './Components/Scoreboard';

class App extends Component {
  state = {
    turn: 'x',
    board: ['', '', '', '', '', '', '', '', ''],
    gameOver: false,
    winner: '',
    player1: 0,
    player2: 0,
    clickCounter: 0
  }
  render() {
    const { board, gameOver, player1, player2, winner } = this.state;

    return (
      <div className="App">
        <h1>Noughts & Crosses</h1>
        <Scoreboard handlePlayAgain={this.handlePlayAgain} player1={player1} player2={player2} winner={winner} />
        <Board getPosition={this.getPosition} board={board} gamOver={gameOver} />
        <button onClick={this.handleReset}>Reset Scoreboard</button>
      </div>
    );
  }

  componentDidMount() {
    const storedState = localStorage.getItem('state')
    if (storedState) {
      this.setState(JSON.parse(storedState));
    }
  }

  componentDidUpdate(prevProprs, prevState) {
    this.saveData()
  }

  saveData = () => {
    localStorage.setItem('state', JSON.stringify(this.state));
  }

  getPosition = (position) => {
    this.updateBoardState(position)
  }
  updateBoardState = (position) => {
    if (!this.state.gameOver) {
      this.setState(({ board, turn, clickCounter }) => {
        const updatedBoard = board.map((item, index) => {
          if (index === Number(position) && item === '') {
            item = turn;
          }
          return item;
        })
        return {
          board: updatedBoard,
          clickCounter: clickCounter + 1
        }
      }, () => {
        this.checkWinner();
      })
    }


  }
  checkWinner = () => {
    const winningCombination = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    const { turn, clickCounter } = this.state;
    const winner = winningCombination.filter(subArray => {
      return (subArray.every((element) => {
        return this.state.board[element] === turn;
      }))
    })
    if (winner.length === 1) {
      let player
      if (turn === "x") {
        player = "player1"
      } else {
        player = "player2"
      }

      this.setState((prevState) => ({
        gameOver: true,
        winner: turn,
        player: prevState[player]++
      }))
    }
    else if (clickCounter === 9) {
      this.setState(() => ({
        gameOver: true,
        winner: "draw"
      }))
    }

    this.setState(() => ({
      turn: turn === 'x' ? 'o' : 'x'
    }))

  }

  handlePlayAgain = () => {
    this.setState({
      turn: 'x',
      board: ['', '', '', '', '', '', '', '', ''],
      gameOver: false,
      winner: '',
      clickCounter: 0
    })
  }

  handleReset = () => {
    this.setState({
      player1: 0,
      player2: 0,
      turn: 'x',
      board: ['', '', '', '', '', '', '', '', ''],
      gameOver: false,
      winner: '',
      clickCounter: 0
    })
  }

}



export default App;
