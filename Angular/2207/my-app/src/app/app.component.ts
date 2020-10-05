import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = 'Anat';
  age: number = 21;
  x: string = 'hello world';
  color: string = 'blue';
  colorA: string = 'yellow';
  classColor: string = 'green';
  isRed: boolean = false;
  isClicked: boolean = false;
  handleClick(event: any): void {
    this.isClicked = !this.isClicked;
  }
  inc: number = 0;
  handleClickSecond(event: MouseEvent): void {
    this.inc++;
  }
}
