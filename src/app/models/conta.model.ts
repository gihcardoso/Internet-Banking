import { Transferencia } from './transferencia.model';
import { Favorecido } from 'src/app/models/favorecido.model';

export class IConta {
  favorecidos: Favorecido[];
  nrAgencia: number;
  nrBanco: number;
  nrConta: number;
  transferencias: Transferencia[];
  usuario: string;
  vlSaldo: number;
  __v: number;
  id: string;
}

export class Conta implements IConta {
  constructor(
    public favorecidos: Favorecido[],
    public nrAgencia: number,
    public nrBanco: number,
    public nrConta: number,
    public transferencias: Transferencia[],
    public usuario: string,
    public vlSaldo: number,
    public __v: number,
    public id: string,
  ) { }
}
