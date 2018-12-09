declare var $: any;

import { Component, OnInit } from '@angular/core';
import { TransferenciaService } from '../../services/transferencia.service';
import { Router } from '@angular/router';
import { Transferencia } from 'src/app/models/transferencia.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Iusuario, Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-transferencias',
  templateUrl: './transferencias.component.html',
  styleUrls: ['./transferencias.component.scss']
})
export class TransferenciasComponent implements OnInit {

  transferencia: Transferencia = {
    contaOrigem: null,
    agenciaOrigem: null,
    contaDestino: null,
    agenciaDestino: null,
    valor: null,
    observacao: null,
  };

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

  constructor(private transf: TransferenciaService, private router: Router, private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.buscaUsuario();
  }

  buscaUsuario() {
    this.usuarioService.getUsuario().subscribe(
      res => {
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

  realizaTransferencia() {
    this.transf.transferencia(this.transferencia)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          if (err.error.auth === false) {
            localStorage.removeItem('token');
            this.router.navigate(['/']);
          } else {
            $('.modal-login h1').html(err.error.mensagem),
              $('.modal-login').css('height', $('body').height()).addClass('ativo');
          }
        }
      );
  }

  fecharModal() {
    $('.modal-login').removeClass('ativo');
  }

}
