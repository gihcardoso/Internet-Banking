import { Injectable } from '@angular/core';

//Import
import { Login } from '../models/login.model';
   //import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = "https://05e8e7af-d6c6-4aa3-80d8-76118efaa9d5.mock.pstmn.io/api/v1/usuario/logon";


   private loginAuth: boolean = false;

  constructor(private http: HttpClient) { }
  
  fazerLogin2(login){

    return this.http.post<any>(this.loginUrl, login)


      // A partir daqui eu ACHO que vai ser a unica parte que ira mudar
  // pois as informações vão ser mandadas pro servidor e depois voltar
    //alert('Funfa antes do If');

  /* if (login.nrCPF == 123 && login.dsSenha == 123){

    this.loginAuth = true;

    alert('Funfa dentro do If');

    this.router.navigate(['home']);

  } 
  else{

    this.loginAuth = false;
  } */

}
}
