import { Component, OnInit } from '@angular/core';
import { ExtratoService } from 'src/app/services/extrato.service';
import { IExtrato } from 'src/app/models/extrato.models'

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  extrato: IExtrato;
  constructor(private extratoService: ExtratoService) { }

  ngOnInit() {
    this.gerarExtratoFiltro();
  }
  
  gerarExtratoFiltro(){    
    this.extratoService.getTransacoes('filtro')
    .subscribe(
      res => {
        this.extrato = res;
      },
      err => console.log(err['erro'])
    );
  }

}
