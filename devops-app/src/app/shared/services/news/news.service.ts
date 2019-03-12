import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { News } from './news';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private url = "http://localhost:9000/api/news";

  constructor(private http: HttpClient) { }

  getItems(): Observable<News[]> {
    return this.http.get<News[]>(this.url);
  }

  getItem(id: number): Observable<News> {
    const url = `${this.url}/${id}`;
    return this.http.get<News>(url);
  }

  addItem(item: News): Observable<News> {
    return this.http.post<News>(this.url, item, httpOptions);
  }

  deleteItem(item: News | number): Observable<News> {
    const id = typeof item === 'number' ? item : item.id;
    const url = `${this.url}/${id}`;

    return this.http.delete<News>(url, httpOptions);
  }

  updateItem(item: News): Observable<any> {
    const url = `${this.url}/${item.id}`;
    return this.http.put<News>(url, item, httpOptions);
  }
}
