import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private http: HttpClient) {}

  addProduct(product: any): Observable<any> {
    return this.http.post('http://localhost:3000/products', product);
  }

  getProductById(id: string): Observable<any> {
    return this.http.get(`http://localhost:3000/products/${id}`);
  }

  updateProduct(id: string, product: any): Observable<any> {
    return this.http.put(`http://localhost:3000/products/${id}`, product);
  }

  deleteProduct(id: string): Observable<any> {
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }
}
