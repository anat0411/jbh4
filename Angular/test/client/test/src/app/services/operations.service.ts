import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
  withCredentials: true,
};

@Injectable({
  providedIn: 'root',
})
export class OperationsService {
  constructor(private http: HttpClient) {}

  getOperations(inputValue: Number): Observable<any> {
    console.log(inputValue);
    return this.http.get(
      'http://localhost:3000/operations/',
      {
        accountID: inputValue,
      },
      httpOptions
    );
  }

  addOperation(id: string): Observable<any> {
    return this.http.post(
      'http://localhost:3000/operations/',
      {
        accountID: id,
      },
      httpOptions
    );
  }
}
