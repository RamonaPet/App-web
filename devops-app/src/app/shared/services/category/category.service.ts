import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Category } from './category';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private url = "http://localhost:9000/api/categories";

  constructor(private http: HttpClient) { }

  getItems(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url);
  }

  getItem(id: number): Observable<Category> {
    const url = `${this.url}/${id}`;
    return this.http.get<Category>(url);
  }

  addItem(item: Category): Observable<Category> {
    return this.http.post<Category>(this.url, item, httpOptions);
  }

  deleteItem(item: Category | number): Observable<Category> {
    const id = typeof item === 'number' ? item : item.id;
    const url = `${this.url}/${id}`;

    return this.http.delete<Category>(url, httpOptions);
  }

  updateItem(item: Category): Observable<any> {
    const url = `${this.url}/${item.id}`;
    return this.http.put<Category>(url, item, httpOptions);
  }
}
