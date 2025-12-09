import { db } from "./db.js";

function getUser() {
    const cpf = localStorage.getItem("userCPF");
    return db.find(u => u.cpf === cpf);
}

export function consultarSaldo() {
    const user = getUser();
    return user.saldo;
} 
export function encontrarConta(cpf){
    return db.find(conta => conta.cpf === cpf)
}

export function depositar(valor) {
    const user = getUser();
    const valorNumerico = Number(valor);
    const novoSaldo = user.saldo + valorNumerico;
    db = atualizarSaldoNodb(user.cpf, novoSaldo)
    return encontrarConta(user.cpf).saldo
}

export function sacar(valor) {
    valor = Number(valor);
    const digitoUnidade = valor % 10
    const user = getUser();

    if(valor < 10){
        return {erro: "Valor menor á R$10 no é permitido"}
    }else if (valor > user.saldo) {
        return { erro: "Saldo insuficiente!" };
    }else if(digitoUnidade === 1 || digitoUnidade === 3) {
        return {erro : `Saque de R$${valor} não é permitido, sugestão sacar R$${valor + 1} ou R$${valor -1}`}
    }

    user.saldo -= valor;

    return {
        sucesso: true,
        notas: separarNotas(valor)
    };
}

function separarNotas(valor) {
    const notas = [200, 100, 50, 20, 10, 5, 2];
    const resultado = {};

    for (const nota of notas) {
        if (valor >= nota) {
            const qtd = Math.floor(valor / nota);
            valor -= qtd * nota;
            resultado[nota] = qtd;
        }
    }
    return resultado;
}


