import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-myinput',
  templateUrl: './myinput.component.html',
  styleUrls: ['./myinput.component.css'],
})
export class MyinputComponent implements OnInit {
  @Output() change: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  updateColor(color: string): void {
    this.change.emit(color);
  }
}
