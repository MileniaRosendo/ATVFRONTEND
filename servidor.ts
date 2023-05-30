class ContaBancaria {
  private saldo: number;
  private extrato: number[];

  constructor(saldoInicial: number) {
    this.saldo = saldoInicial;
    this.extrato = [saldoInicial];
  }

  public getSaldo(): number {
    return this.saldo;
  }

  public getExtrato(): number[] {
    return this.extrato;
  }

  public sacar(valor: number): void {
    if (valor > this.saldo) {
      throw new Error('Saldo insuficiente');
    }
    this.saldo -= valor;
    this.extrato.push(-valor);
  }
}

const minhaConta = new ContaBancaria(1000);
console.log(minhaConta.getSaldo()); // Saída: 1000

minhaConta.sacar(200);
console.log(minhaConta.getSaldo()); // Saída: 800

console.log(minhaConta.getExtrato()); // Saída: [1000, -200]
