import { Injectable } from '@angular/core';
import {GameStates} from "../gameStates";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  gameBoard = [];
  private turn: number = 0;
  private emptyCells = 9;
  private gameWon: boolean = false;

  constructor() { }

  public initGame(): void {
    this.gameBoard = new Array(9).fill('');
    this.turn = 0;
    this.emptyCells = 9;
    this.gameWon = false;
  }

  private nextTurn(): void {
    this.turn === 1 ? this.turn = 0 : this.turn = 1;
  }

  public play(cellIndex: number): void {
    if(this.checkLegalMove(cellIndex)){
      this.gameBoard[cellIndex] = this.turn;
      this.emptyCells--;
      this.checkWinner();
      if (!this.gameWon) {
        this.nextTurn();
      }
    }
  }

  private checkLegalMove(cellIndex: number): boolean {
    return this.gameBoard[cellIndex] === '' && this.gameWon === false;
  }

  public checkWinner(): boolean {
    let winningStates = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    winningStates.map(state => {
      if (this.gameBoard[state[0]] === this.gameBoard[state[1]] && this.gameBoard[state[1]] === this.gameBoard[state[2]] && this.gameBoard[state[0]] !== '') {
        this.gameWon = true;
        return true;
      }
    });
    return false;
  }

  public getCurrentTurn(): number {
    return this.turn + 1;
  }

  public getGameStatus(): GameStates {
    if (this.gameWon) {
      return GameStates.WON;
    }
    if (this.emptyCells === 0) {
      return GameStates.DRAW;
    }
    return GameStates.TURN;
  }
}
