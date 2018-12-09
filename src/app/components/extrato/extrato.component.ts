import { Component, OnInit } from '@angular/core';
import { ExtratoService } from 'src/app/services/extrato.service';
import { IExtrato } from 'src/app/models/extrato.models'
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  extrato: IExtrato;
  constructor(private extratoService: ExtratoService, private u: UsuarioService) { }

  ngOnInit() {
    this.gerarExtratoFiltro();
    
  }
  
  gerarExtratoFiltro(){    
    this.u.getUsuario().subscribe(
      res => {
        console.log(res[0]);
      },
      err => console.log(err)
    );

    this.extratoService.getTransacoes('filtro')
    .subscribe(
      res => {
        this.extrato = res;
      },
      err => console.log(err['erro'])
    );
  }

}
