import { Component, OnInit } from '@angular/core';
import { OperationsService } from '../../services/operations.service';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css'],
})
export class OperationsComponent implements OnInit {
  operations: Array<any>;
  inputValue: any;

  constructor(private operationsServices: OperationsService) {}

  onUpdateInputValue(event: Event) {
    this.inputValue = (<HTMLInputElement>event.target).value;
  }

  updateOperations(inputValue: Number) {
    inputValue = this.inputValue;
    console.log(this.inputValue);
    this.operationsServices.getOperations(inputValue).subscribe((data) => {
      console.log(data);
      this.operations = data.map((operation) => operation);
    });
  }

  ngOnInit(): void {
    // this.updateOperations(this.inputValue);
    // console.log(this.operations);
  }

  // ngOnChanges() {
  //   this.updateOperations();
  // }
}
