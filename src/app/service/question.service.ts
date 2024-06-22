import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from '../Model/Question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private apiUrl = 'http://localhost:8083/Questions'; 

  constructor(private http: HttpClient) {}

  getQuestions(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  getQuestionByCriteria(id: number): Observable<Question[]> {
    return this.http.get<Question[]>(`${this.apiUrl}/getQuestionByCriteria/${id}`);
  }
}
