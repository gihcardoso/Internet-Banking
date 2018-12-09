declare var $: any;

import { ContaService } from './../../services/conta.service';
import { Component, OnInit } from '@angular/core';
import { ExtratoService } from 'src/app/services/extrato.service';
import { IExtrato } from 'src/app/models/extrato.models';
import { IConta } from 'src/app/models/conta.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  extrato: IExtrato = {
    transacoes: null,
    success: null,
    erro: null,
  };
  conta: IConta = {
    favorecidos: null,
    nrAgencia: null,
    nrBanco: null,
    nrConta: null,
    usuario: null,
    vlSaldo: null,
    __v: null,
    id: null,
  };
  constructor(private extratoService: ExtratoService, private c: ContaService, private router: Router) { }

  ngOnInit() {
    this.gerarExtratoFiltro();
  }

  gerarExtratoFiltro() {
    this.c.getConta().subscribe(
      res => {
        this.conta = res[0];
      },
      err => {
        if (err.error.auth === false) {
          localStorage.removeItem('token');
          this.router.navigate(['/']);
        } else {
          console.log(err);
        }
      });

    this.extratoService.getTransacoes('filtro')
      .subscribe(
        res => {
          this.extrato = res;
        },
        err => console.log(err['erro'])
      );
  }

}
