const numero = Number(prompt("Escolha um numero:"));
let nAnterior = numero - 1;
let nPosterior = numero + 1;

console.log(`O n° escilhido foi o: ${numero} \n E os seus vizinhos são: ${nAnterior}, ${nPosterior} `);