import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment2';
  userName = '';

  isUserNameEmpty() {
    return this.userName == '';
  }

  onResetUserName() {
    this.userName = '';
  }
}
