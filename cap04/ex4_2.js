const formulario = document.querySelector('form');
const resposta = document.querySelector('h3');

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = formulario.inNome.value;
    const masculino = formulario.inMasculino.checked;
    const altura = Number(formulario.inAltura.value);

    let peso
    if(masculino) {
        peso = 22 * Math.pow(altura, 2)
    } else {
        peso = 21 * Math(altura, 2)
    }

    resposta.innerText = `${nome}: Peso Ideal ${peso.toFixed(3)} kg`
})