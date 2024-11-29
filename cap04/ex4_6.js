const frm = document.querySelector("form");
const resp1 = document.querySelector("#resp1");
const resp2 = document.querySelector("#resp2");
const resp3 = document.querySelector("#resp3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const valorSaque = Number(frm.inValor.value);
    if (valorSaque % 10 != 0) {
        alert(`Valor inválido para notas disponiveis(10, 50, 100)`);
        frm.inValor.focus();
        return
    }

    const notaCem = Math.floor(valorSaque / 100);
    let resto = valorSaque % 100;
    const notaCinquenta = Math.floor(resto / 50);
    resto = resto % 50;
    const notaDez = Math.floor(resto / 10);
      

    if (notaCem > 0) {
        resp1.innerText = `Notas de R$ 100: ${notaCem}`;
    }
    if (notaCinquenta > 0) {
        resp2.innerText = `Notas de R$ 50: ${notaCinquenta}`;
    }
    if (notaDez > 0) {
        resp3.innerText = `Notas de R$ 10: ${notaDez}`;
    }
})