import React, { Component } from 'react';
import './App.css';
import Board from './Components/Board';


class App extends Component {
  state = {
    turn: 'x',
    board: ['', '', '', '', '', '', '', '', ''],
    gameOver: false,
    winner: ''
  }
  render() {
    return (
      <div className="App">
        <h1>Noughts & Crosses</h1>
        <Board getPosition={this.getPosition} board={this.state.board} gamOver={this.state.gameOver}/>
      </div>
    );
  }
  getPosition = (position) => {
    this.updateBoardState(position);
  }
  updateBoardState = (position) => {
    if (!this.state.gameOver) {
      this.setState(({ board, turn }) => {
        const updatedBoard = board.map((item, index) => {
          if (index === Number(position) && item === '') {
            item = turn;
          }
          return item;
        })
        return {
          board: updatedBoard
        }
      }, () => {
        this.checkWinner();
      })
    }
    

  }
  checkWinner = () => {
    const winningCombination = [[0, 1, 2],[3, 4, 5],[6, 7, 8], [0, 3, 6],[1, 4, 7], [2, 5, 8], [0, 4, 8],[2, 4, 6]];
    const {turn} = this.state;
    const winner = winningCombination.filter(subArray => {
      return (subArray.every((element) => {
       return this.state.board[element] === turn;
      }))
    })
    if (winner.length === 1) {
      this.setState({
        gameOver: true,
        winner: turn
      }, () => {
          
      })
    }
    
    this.setState(() => ({
      turn: turn === 'x' ? 'o' : 'x'
    }))

  }
}

export default App;
