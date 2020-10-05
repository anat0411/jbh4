import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  // @Output() onInc:EventEmitter<void> = new EventEmitter<void>();
  // @Output() onDec:EventEmitter<void> = new EventEmitter<void>();
  @Output() onCount: EventEmitter<boolean> = new EventEmitter<boolean>();

  inc(): void {
    this.onCount.emit(true);
  }

  dec(): void {
    this.onCount.emit(false);
  }
}
