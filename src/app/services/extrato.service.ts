import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../app.api';

@Injectable({
  providedIn: 'root'
})
export class ExtratoService {

  constructor(private http: HttpClient) { }

  getTransacoes(filtro) {
    return this.http.post<any>(`${API}/conta/extrato`, filtro);
  }

}
