import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Heroe, UpdateHeroe } from '../interfaces/heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroeService {
  
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoints;
    this.myApiUrl = 'api/heroes/';
  }

  getHeroes(): Observable<Heroe[]> {
    const token = localStorage.getItem('token');
    const header = new HttpHeaders().set('Authorization', `Bearer ${token}`)
    return this.http.get<Heroe[]>(`${this.myAppUrl}${this.myApiUrl}`, { headers : header})
    // return this.http.get<Heroe[]>(`${this.myAppUrl}${this.myApiUrl}`)

  }

  deleteHeroe(id: number): Observable<any> {
    const token = localStorage.getItem('token');
    const header = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete<any>(`${this.myAppUrl}${this.myApiUrl}${id}`, { headers: header });
  }

  updateHeroe(id : string, heroeData: UpdateHeroe): Observable<any> {
    const token = localStorage.getItem('token');
    const header = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put<any>(`${this.myAppUrl}${this.myApiUrl}${id}`, heroeData, { headers: header });
  }

  createHeroe(heroeData: Heroe): Observable<any> {
    const token = localStorage.getItem('token');
    const header = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<any>(`${this.myAppUrl}${this.myApiUrl}addHeroe`, heroeData, { headers: header });
  }  
}