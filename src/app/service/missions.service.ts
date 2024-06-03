import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateMission, Mission } from '../Model/missions';

@Injectable({
  providedIn: 'root'
})
export class MissionsService {

  private baseUrl = 'http://localhost:8083/Mission'; 

  constructor(private http: HttpClient) { }

  getAllMissions(): Observable<Mission[]> {
    return this.http.get<Mission[]>(`${this.baseUrl}/retrieve-all-mission`);
  }

  getMissionById(id: number): Observable<Mission> {
    return this.http.get<Mission>(`${this.baseUrl}/${id}`);
  }

  createMission(mission: CreateMission): Observable<CreateMission> {
    return this.http.post<CreateMission>(`${this.baseUrl}/add`, mission);
  }

  deleteMission(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  // Ajoute d'autres méthodes pour mettre à jour, etc., des missions
}
