import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class DataService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    let API_URL = 'https://jsonplaceholder.typicode.com/posts';
    return this.http.get(API_URL);
  }
}
