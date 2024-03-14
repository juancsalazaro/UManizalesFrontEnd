import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}

  getAllData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'items');
  }

  getSearchData(search: String): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'items/search/' + search);
  }

  getIdData(id: String): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'items/id/' + id);
  }
}
