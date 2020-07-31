import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-shell-try';
  constructor() {
    window.sessionStorage.setItem('key', 'test key');
  }
}
