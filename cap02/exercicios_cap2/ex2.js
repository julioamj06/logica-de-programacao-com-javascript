const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    const valor = Number(frm.inPreco.value);
    const min = Number(frm.inTempo.value);

    const valorACobrar = Math.ceil(min / 15)*valor;
    resp.innerText = `Valor a Pagar R$: ${valorACobrar}`;


    e.preventDefault();
})