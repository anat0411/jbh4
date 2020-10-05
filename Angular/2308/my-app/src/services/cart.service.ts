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
export class CartService {
  constructor(private http: HttpClient) {}

  addToCart(id: string): Observable<any> {
    return this.http.put(
      'http://localhost:3000/cart',
      {
        productID: id,
      },
      httpOptions
    );
  }

  getCart(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/cart', httpOptions);
  }
}
