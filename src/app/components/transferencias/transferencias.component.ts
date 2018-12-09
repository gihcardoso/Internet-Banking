declare var $: any;

import { Component, OnInit } from '@angular/core';
import { TransferenciaService } from '../../services/transferencia.service';
import { Router } from '@angular/router';
import { Transferencia } from 'src/app/models/transferencia.model';

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

  constructor(private transf: TransferenciaService, private router: Router) { }

  ngOnInit() {

  }

  realizaTransferencia() {
    this.transf.transferencia(this.transferencia)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          if (err.error.auth === false) {
            $('.modal-login h1').html('Sua sessão expirou'),
              $('.modal-login').css('height', $('body').height()).addClass('ativo');
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
