import { Component, OnInit, Input } from '@angular/core';
import { Item } from './listitem.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input() search: string;

  myList: Item[] = [
    {
      id: 1,
      msg: 'Hello',
    },
    {
      id: 2,
      msg: 'World',
    },
  ];
  // myFilterList:Item[] = this.myList.filter((item:Item) => item.msg.includes(this.search || ''))

  constructor() {
    let counter = 10;
    const intervalID = setInterval(() => {
      this.myList.push({
        id: Math.floor(Math.random() * 1000),
        msg: 'new item',
      });

      counter--;
      if (--counter < 0) {
        clearInterval(intervalID);
      }
    }, 1000);
  }

  trackById(index: number, item: Item): number {
    return item.id;
  }

  onDelete(id: number): void {
    this.myList = this.myList.filter((item: Item) => item.id != id);
  }
}
