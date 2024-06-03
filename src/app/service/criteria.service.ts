import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CriteriaService {

  private apiUrl = 'http://localhost:8083/criteria'; 

  constructor(private http: HttpClient) {}

  getAllCriteria(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/retrieve-all-criteria`);
  }
}