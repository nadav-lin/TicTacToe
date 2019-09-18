import { Component, OnInit } from '@angular/core';
import {GameService} from "../services/game.service";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor(public gameService: GameService) { }

  ngOnInit() {
    this.gameService.initGame();
  }

  public makeMove(cellIndex: number): void {
    this.gameService.play(cellIndex);
  }

  private getSymbol(cellNumber: number): string {
    switch (this.gameService.gameBoard[cellNumber]){
      case 0: return 'O';
      case 1: return 'X';
      default: return '';
    }
  }
}
