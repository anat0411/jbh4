import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  template: '<h2>{{getTitle()}}</h2>',
})
export class CoursesComponent implements OnInit {
  title = 'List of courses';

  getTitle() {
    return this.title;
  }

  constructor() {}

  ngOnInit(): void {}
}
