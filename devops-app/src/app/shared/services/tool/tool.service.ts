import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Tool } from './tool';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ToolService {
  private url = "http://localhost:9000/api/tools";

  constructor(private http: HttpClient) { }

  getItems(): Observable<Tool[]> {
    return this.http.get<Tool[]>(this.url);
  }

  getItem(id: number): Observable<Tool> {
    const url = `${this.url}/${id}`;
    return this.http.get<Tool>(url);
  }

  addItem(item: Tool): Observable<Tool> {
    return this.http.post<Tool>(this.url, item, httpOptions);
  }

  deleteItem(item: Tool | number): Observable<Tool> {
    const id = typeof item === 'number' ? item : item.id;
    const url = `${this.url}/${id}`;

    return this.http.delete<Tool>(url, httpOptions);
  }

  updateItem(item: Tool): Observable<any> {
    const url = `${this.url}/${item.id}`;
    return this.http.put<Tool>(url, item, httpOptions);
  }
}
