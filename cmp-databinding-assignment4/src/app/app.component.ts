import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  evenCounter: boolean;
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onGameStarted(counter: number) {
    
    if(counter % 2 == 0) {
      this.evenNumbers.push(counter);
    } else {
      this.oddNumbers.push(counter);
    }
    console.log('Current counter: ' + counter);
  }
}
