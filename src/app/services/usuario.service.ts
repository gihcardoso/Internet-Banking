import { API, API_PROD } from './../app.api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getUsuario() {
    return this.http.post<any>(`${API_PROD}/conta`, '');
  }
}
