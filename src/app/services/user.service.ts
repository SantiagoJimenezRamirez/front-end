import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { RegisterUser, User } from '../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private myAppUrl: string;
  private myApiUrl: string; 

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoints;
    this.myApiUrl = 'api/users/';
  }

  register(user: RegisterUser): Observable<any> {
    return this.http.post<any>(`${this.myAppUrl}${this.myApiUrl}`, user);
  }
  login(user : User): Observable<string>{
    return this.http.post<string>(`${this.myAppUrl}${this.myApiUrl}/login`, user);
  }

  forgotPassword(email: string): Observable<any> {
    return this.http.post<any>(`${this.myAppUrl}${this.myApiUrl}findByEmail`, { email });
  }
}