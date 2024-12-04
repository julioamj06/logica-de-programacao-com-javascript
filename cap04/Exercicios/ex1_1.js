const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit",(e) => {
    e.preventDefault();
    const num = Number(frm.inNumero.value);    

    if (num % 2 === 0) {
        resp.innerText = `${num} é Par`;
    } else {
        resp.innerText = `${num} é Ímpar`;
    }    
})