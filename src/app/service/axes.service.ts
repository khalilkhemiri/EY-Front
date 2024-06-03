import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Axe } from '../Model/Axes';
import { Domain } from '../Model/Domain';
@Injectable({
  providedIn: 'root'
})
export class AxesService {

  private baseUrl = 'http://localhost:8083/axes'; 

  constructor(private http: HttpClient) { }

  getAllAxes(): Observable<Axe[]> {
    return this.http.get<Axe[]>(`${this.baseUrl}`);
  }

  getMissionById(id: number): Observable<Axe> {
    return this.http.get<Axe>(`${this.baseUrl}/${id}`);
  }
  getDomainByAxeId(id: number): Observable<Axe> {
    return this.http.get<Domain>(`${this.baseUrl}/domains/${id}`);
  }

  createMission(Axe: Axe): Observable<Axe> {
    return this.http.post<Axe>(this.baseUrl, Axe);
  }

  deleteMission(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}