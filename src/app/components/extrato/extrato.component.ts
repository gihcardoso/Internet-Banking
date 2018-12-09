import { ContaService } from './../../services/conta.service';
import { Component, OnInit } from '@angular/core';
import { ExtratoService } from 'src/app/services/extrato.service';
import { IExtrato } from 'src/app/models/extrato.models'
import { IConta } from 'src/app/models/conta.model';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  extrato: IExtrato;
  conta: IConta = null;
  constructor(private extratoService: ExtratoService, private c: ContaService) { }

  ngOnInit() {
    this.gerarExtratoFiltro();
  }
  
  gerarExtratoFiltro(){
    this.c.getConta().subscribe(
      res => {
        this.conta = res ;
        console.log(res[0].nrConta)
      },
      err => {
        console.log(err);
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
