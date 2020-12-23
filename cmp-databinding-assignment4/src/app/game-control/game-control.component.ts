import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  gameCounter = 0;
  intervalId;
  @Output() gameStarted = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    this.intervalId = setInterval(() => this.gameStarted.emit(this.gameCounter++), 1000);
    console.log('Game started');
  }

  onStopGame() {
    clearInterval(this.intervalId)
    console.log('Game stopped at ' + this.gameCounter);
  }
}
