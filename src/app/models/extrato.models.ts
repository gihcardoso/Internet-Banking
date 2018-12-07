import { Transacao } from './transacao.model';

export interface IExtrato {
  transacoes: Transacao[],
  success: boolean,
  erro: string
}

export class Extrato implements IExtrato {
  constructor(
    public transacoes: Transacao[],
    public success: boolean,
    public erro: string
  ) { }

}
