
import React, { Component } from 'react';

class Board extends Component {
    render() {
        const { board } = this.props;
        return <div className="game-board">
            <div className="row">
              <div className="square" data-square={0} onClick={this.handlePick}>{board[0]}</div>
                <div className="square" data-square={1} onClick={this.handlePick}>{board[1]}</div>
                <div className="square" data-square={2} onClick={this.handlePick}>{board[2]}</div>
            </div>
            <div className="row">
                <div className="square" data-square={3} onClick={this.handlePick}>{board[3]}</div>
                <div className="square" data-square={4} onClick={this.handlePick}>{board[4]}</div>
                <div className="square" data-square={5} onClick={this.handlePick}>{board[5]}</div>
            </div>
            <div className="row">
                <div className="square" data-square={6} onClick={this.handlePick}>{board[6]}</div>
                <div className="square" data-square={7} onClick={this.handlePick}>{board[7]}</div>
                <div className="square" data-square={8} onClick={this.handlePick}>{board[8]}</div>
            </div>
          </div>;
    }
    handlePick = (click) => {
        
        const arrayPosition = click.target.dataset.square;
        if (this.props.board[arrayPosition] === '') {
        this.props.getPosition(arrayPosition) }
    
}
}

export default Board;