import { Component, OnInit } from '@angular/core';
import {GameService} from "../services/game.service";
import {GameStates} from "../gameStates";

@Component({
  selector: 'app-main-board',
  templateUrl: './main-board.component.html',
  styleUrls: ['./main-board.component.css']
})
export class MainBoardComponent implements OnInit {

  constructor(public gameService: GameService) { }

  ngOnInit() {
  }

  private getMessage(): string {
    switch(this.gameService.getGameStatus()) {
      case GameStates.WON:
        return 'Player ' + this.gameService.getCurrentTurn() + ' won!';
      case GameStates.DRAW:
        return 'Draw';
      case GameStates.TURN:
      default:
        return 'Player number ' + this.gameService.getCurrentTurn() + '\'s turn';
    }
  }

}
