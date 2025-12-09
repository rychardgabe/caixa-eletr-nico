 export let db = [
    {cpf : "12345678900", senha : "1234", saldo: 1500},
    {cpf : "98765432100", senha : "4321", saldo: 900},
    {cpf : "11122233344", senha : "1111", saldo: 4500},
    {cpf : "44433322211", senha : "2222", saldo: 200},
    {cpf : "55566677788", senha : "3333", saldo: 780}
]

/**
 * @param {string} cpf 
 * @param {number} novoSaldo
 * @returns {Array} 
 */
function atualizarSaldoNodb(cpf, novoSaldo) {
    const novoDb = db.map(conta => {
        
        if (conta.cpf === cpf) {
            return {
                ...conta,
                saldo: Number(novoSaldo.toFixed(2)) 
            };
        }
        return conta;
    });

    return novoDb;
}

   
    
     
     
    