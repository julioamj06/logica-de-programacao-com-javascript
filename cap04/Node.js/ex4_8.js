const prompt = require("prompt-sync")();
valor = Number(prompt("Valor da CompraR$:"));
const aux = Math.floor(valor/20);
const parcelar = aux == 0? 1: aux > 6 ? 6: aux;
const valorParcela = valor/parcelar;

console.log(`Pode Pagar em ${parcelar}x de R$: ${valorParcela.toFixed(2)}`);