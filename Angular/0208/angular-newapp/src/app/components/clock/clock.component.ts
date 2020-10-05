import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css'],
})
export class ClockComponent {
  @Input('helloTitle') title: string;
  @Input() counter: number;
  @Output() alert: EventEmitter<string> = new EventEmitter<string>();

  onAlert(event: MouseEvent): void {
    this.alert.emit('Alert msg');
  }
}
