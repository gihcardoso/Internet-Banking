export interface Itranferencia {
  contaOrigem: string;
  agenciaOrigem: string;
  contaDestino: string;
  agenciaDestino: string;
  valor: number;
  observacao: string;
}

export class Transferencia implements Itranferencia {
  constructor(
    public contaOrigem: string,
    public agenciaOrigem: string,
    public contaDestino: string,
    public agenciaDestino: string,
    public valor: number,
    public observacao: string,
  ) { }

}
