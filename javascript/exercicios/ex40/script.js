class Conta {
    constructor(saldoContaCorrente, saldoContaPoupança, jurosPoupança) {
        this.saldoContaCorrente = saldoContaCorrente;
        this.saldoContaPoupança = saldoContaPoupança;
        this.jurosPoupança = jurosPoupança;
    }

    deposito(valor) {
        this.saldoContaCorrente += valor;
    }

    saque(valor) {
        this.saldoContaCorrente -= valor;
    }

    transferenciaCP(valor) {
        this.saldoContaCorrente -= valor;
        this.saldoContaPoupança += valor;
    }

    transferenciaCC(valor) {
        this.saldoContaPoupança -= valor;
        this.saldoContaCorrente += valor;
    }

    jurosDeAniversario() {
        let juros = (this.saldoContaPoupança * this.jurosPoupança) / 100;
        this.saldoContaPoupança += juros;
    }

}

class ContaEspecial extends Conta {
    constructor(saldoContaCorrente, saldoContaPoupança, jurosPoupança) {
        super(saldoContaCorrente, saldoContaPoupança, jurosPoupança * 2)
    }
}

let conta = new Conta(1000, 5000, 1);

console.log(conta);

conta.saque(500);

console.log(conta);

conta.deposito(5000);

console.log(conta);

conta.transferenciaCP(3000);

console.log(conta);

conta.jurosDeAniversario();

console.log(conta);

let conta2 = new ContaEspecial(10000, 50000, 1);

console.log(conta2);

conta2.saque(5000);

console.log(conta2);

conta2.jurosDeAniversario();

console.log(conta2);