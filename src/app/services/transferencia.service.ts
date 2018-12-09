import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../app.api';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

 private transf = `${API}/transacoes/transferir`


  constructor(private http: HttpClient, private router: Router) { }

  transferencia(dadosTransf) {
    return this.http.get<any>(`${API}/transacoes/transferir`, dadosTransf)
  }

  transferir (dadosTransf){
    return this.http.post<any>(this.transf, dadosTransf)


  }
}
