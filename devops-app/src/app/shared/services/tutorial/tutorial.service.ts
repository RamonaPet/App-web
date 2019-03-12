import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Tutorial } from './tutorial';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TutorialService {
  private url = "http://localhost:9000/api/tutorials";

  constructor(private http: HttpClient) { }

  getItems(): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(this.url);
  }

  getItem(id: number): Observable<Tutorial> {
    const url = `${this.url}/${id}`;
    return this.http.get<Tutorial>(url);
  }

  addItem(item: Tutorial): Observable<Tutorial> {
    return this.http.post<Tutorial>(this.url, item, httpOptions);
  }

  deleteItem(item: Tutorial | number): Observable<Tutorial> {
    const id = typeof item === 'number' ? item : item.id;
    const url = `${this.url}/${id}`;

    return this.http.delete<Tutorial>(url, httpOptions);
  }

  updateItem(item: Tutorial): Observable<any> {
    const url = `${this.url}/${item.id}`;
    return this.http.put<Tutorial>(url, item, httpOptions);
  }
}
