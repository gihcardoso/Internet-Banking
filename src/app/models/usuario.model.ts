export class Iusuario {
  nrAgencia: number;
  nrBanco: number;
  nrConta: number;
  usuario: string;
  vlSaldo: number;
  __v: number;
  id: string;
  dsSenha: string;
  dsEmail: string;
  nrCPF: string;
  sobrenomeUsuario: string;
  nmUsuario: string;
}

export class Usuario implements Iusuario {
  constructor(
    public nrAgencia: number,
    public nrBanco: number,
    public nrConta: number,
    public usuario: string,
    public vlSaldo: number,
    public __v: number,
    public id: string,
    public dsSenha: string,
    public dsEmail: string,
    public nrCPF: string,
    public sobrenomeUsuario: string,
    public nmUsuario: string,
  ) { }
}
