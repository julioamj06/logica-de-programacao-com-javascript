const prompt = require("prompt-sync")();                //adiciona o pacote ao programa
const salario = Number(prompt("Digite o salário:"));        //lê os dados de entrada
const tempo = Number(prompt("Digite o tempo de serviço"));      

const quadrienio = Math.floor(tempo / 4);       //calcula quadrienios
const acrescimo = salario * quadrienio / 100;        //...e acrescimo 
console.log(`Quadriênios: ${quadrienio}`)           //exibe a resposta
console.log(`Salário Final R$: ${(salario+acrescimo).toFixed(2)}`);