const frm = document.querySelector("form");
const resp1 = document.querySelector("#resp1");
const resp2 = document.querySelector("#resp2");

frm.addEventListener("submit", (e) => {
    const produto = frm.inProduto.value;
    const preco = Number(frm.inPreco.value);
    
    const porcentagem = (preco * 0,5);
    const precoFinal =(preco * 2) + porcentagem ;
    resp1.innerText = `${produto} - Promoção: Leve 3 por R$: ${precoFinal.toFixed(2)}`;
    resp2.innerText = `O 3° Produto custa apenas R$: ${porcentagem.toFixed(2)}`;

    e.preventDefault();
})