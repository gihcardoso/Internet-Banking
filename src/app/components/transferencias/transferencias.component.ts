import { Component, OnInit } from '@angular/core';
import { TransferenciaService} from '../../services/transferencia.service'
import { Router } from '@angular/router';
import { Transacao } from 'src/app/models/transacao.model';
import { Favorecido } from 'src/app/models/favorecido.model';

@Component({
  selector: 'app-transferencias',
  templateUrl: './transferencias.component.html',
  styleUrls: ['./transferencias.component.scss']
})
export class TransferenciasComponent implements OnInit {

  //enviarDados = {}

  transacao: Transacao;
  favorecido: Favorecido;


  constructor(private transf: TransferenciaService, private router: Router) { }

  ngOnInit() {

  }



  enviaDados(){

    this.transf.transferir(this.transacao && this.favorecido)
      .subscribe(
      res => {console.log(res)
      this.router.navigate(['/extratoTransf']);

      },
      err => console.log(err)
      )
  }


}
