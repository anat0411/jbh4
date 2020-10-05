import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  myTitle: string = 'My Father Title';
  color: string;
  counter: number = 0;

  count(inc: boolean): void {
    if (inc) {
      this.counter++;
    } else {
      this.counter--;
    }
  }

  updateColor(color: string): void {
    this.color = color;
  }
}
