import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css'],
})
export class MyformComponent implements OnInit {
  name: string = 'Yehuda';
  text: string = 'You can do it!!!';
  constructor() {}

  ngOnInit(): void {}
}
