const valorDaConta = Number(prompt("Ensira o valor da conta a ser paga:"));
const qtdDeClientes = Number(prompt("A conta será dividida por quantos clientes:"));
const valorTotal = valorDaConta/qtdDeClientes;

console.log(`Total a ser pago por pessoas: ${valorTotal.toFixed(2)}`);