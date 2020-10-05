import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  updated: Date;

  addToCart(id) {
    this.updated = new Date();
  }
}
