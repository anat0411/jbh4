import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  msg: string = '';
  hide: boolean = true;

  setClasses() {
    return {
      x: 1 > 2,
      y: true,
    };
  }
}
