import { Transferencia } from './transferencia.model';

export interface IExtrato {
  transacoes: Transferencia[];
  success: boolean;
  erro: string;
}

export class Extrato implements IExtrato {
  constructor(
    public transacoes: Transferencia[],
    public success: boolean,
    public erro: string,
  ) { }

}
