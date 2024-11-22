const valorProduto = Number(prompt("Insira o valor do produto:"));
const desconto = valorProduto * 0.1;
const pgtAVista = valorProduto - desconto;
const parcelado = valorProduto / 3;
console.log(desconto);
alert(`Pagamento a Vista: ${pgtAVista.toFixed(2)} \n Ou 3x de: ${parcelado.toFixed(2)}`);
