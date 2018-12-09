import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Iusuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private usuarioService: UsuarioService) { }

  usuario: Iusuario = {
    nrAgencia: null,
    nrBanco: null,
    nrConta: null,
    usuario: null,
    vlSaldo: null,
    __v: null,
    id: null,
    dsSenha: null,
    dsEmail: null,
    nrCPF: null,
    sobrenomeUsuario: null,
    nmUsuario: null,
  };

  ngOnInit() {
    this.buscaUsuario();
  }

  deslogarUsuario() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  buscaUsuario() {
    this.usuarioService.getUsuario().subscribe(
      res => {
        this.usuario = res;
      },
      err => {
        if (err.error.auth === false) {
          localStorage.removeItem('token');
          this.router.navigate(['/']);
        } else {
          console.log(err);
        }
      });
  }

}
