const prompt = require('prompt-sync')();        //importação a biblioteca prompt-sync
const pesoKg = Number(prompt("Digite o peso da ração em kg:"));     //solicita os dados de entrada
const consumo = Number(prompt("Digite o consumo de ração diário em (gr) do seu gato:"));

const pesoGr = pesoKg * 1000        //processamento dos dados
const duracao = Math.floor(pesoGr / consumo);
const sobra = pesoGr % consumo;

console.log(`Peso da ração (kg): ${pesoKg}`);       //saida das informações
console.log(`Consumo diário (gr): ${consumo}`);
console.log(`Duração ${duracao} dias`);
console.log(`Sobra: ${sobra}gr`);