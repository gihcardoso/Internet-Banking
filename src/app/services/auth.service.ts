import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../app.api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  fazerLogin2(login) {
    return this.http.post<any>(`${API}/usuario/logon`, login);
  }
}
