const frm = document.querySelector("form");
const resp1 = document.querySelector("#resp1");
const resp2 = document.querySelector("#resp2");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const ladoA = Number(document.querySelector("#ladoA").value);
    const ladoB = Number(document.querySelector("#ladoB").value);
    const ladoC = Number(document.querySelector("#ladoC").value);

    // Validação dos lados para formar um triângulo
    if (ladoA >= ladoB + ladoC || ladoB >= ladoA + ladoC || ladoC >= ladoA + ladoB) {
        resp1.innerText = "Os lados não podem formar um triângulo.";
        resp2.innerText = ""; // Limpa a resposta anterior
        return;
    }

    let tipoTriangulo;

    // Determinar o tipo de triângulo
    if (ladoA === ladoB && ladoA === ladoC) {
        tipoTriangulo = "Equilátero";
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        tipoTriangulo = "Isósceles";
    } else {
        tipoTriangulo = "Escaleno";
    }

    // Exibir os resultados
    resp1.innerText = "Os lados podem formar um triângulo.";
    resp2.innerText = `Tipo: ${tipoTriangulo}`;
});