import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProducts } from '../models/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsApi {
  constructor(private http: HttpClient) {}

  // observable rxjs from reactx
  getProducts(): Observable<IProducts[]> {
    return this.http.get<IProducts[]>('http://localhost:3000/products');
  }

  getProductByID(prodID: number): Observable<IProducts> {
    return this.http.get<IProducts>(`http://localhost:3000/products/${prodID}`);
  }

  search(value: string): Observable<IProducts[]> {
    return this.http.get<IProducts[]>(
      `http://localhost:3000/products?product=${value}`
    );
  }
}
