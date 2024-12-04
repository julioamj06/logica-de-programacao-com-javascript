const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const vPermitida = frm.inPermitida.value;
    const vConduta = frm.inConduta.value;
    
    if (vConduta <= vPermitida) {
        resp.innerText = "Sem Multa";
    } else if(vConduta <= vPermitida * 1.2){
        resp.innerText = "Multa Leve";
    } else if (vConduta > vPermitida * 1.2){
        resp.innerText = "Multa Grave";
    }
})