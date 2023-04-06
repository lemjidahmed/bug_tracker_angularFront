import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Bug } from '../model/bug.model';


const baseUrl = 'http://localhost:8080/Bug/';
@Injectable({
  providedIn: 'root'
})
export class BugService {

  constructor(private http: HttpClient) { }

  getAllBugs(): Observable<any[]> {
    return this.http.get<Bug[]>(baseUrl);
  }

  getBug(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  createBug(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  updateBug(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  deleteBug(id: number): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAllBugs(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Bug[]> {
    return this.http.get<Bug[]>(`${baseUrl}?title=${title}`);
  }
}


