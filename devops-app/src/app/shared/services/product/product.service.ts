import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Product } from './product';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = "http://localhost:9000/api/products";

  constructor(private http: HttpClient) { }

  getItems(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  getItem(id: number): Observable<Product> {
    const url = `${this.url}/${id}`;
    return this.http.get<Product>(url);
  }

  addItem(item: Product): Observable<Product> {
    return this.http.post<Product>(this.url, item, httpOptions);
  }

  deleteItem(item: Product | number): Observable<Product> {
    const id = typeof item === 'number' ? item : item.id;
    const url = `${this.url}/${id}`;

    return this.http.delete<Product>(url, httpOptions);
  }

  updateItem(item: Product): Observable<any> {
    const url = `${this.url}/${item.id}`;
    return this.http.put<Product>(url, item, httpOptions);
  }
}
