import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'assignment3';
  display = false;
  clickIter = 0;
  logs = [];

  onToggleDisplay() {
    this.display = !this.display;
    this.clickIter++;
    //this.logs.push(this.clickIter);
    this.logs.push(new Date());
  }

  getBackgroundColor() {
    return this.clickIter > 4 ? 'blue' : 'transparent';
  }
}
