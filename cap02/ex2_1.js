//Criar referência ao form e ao elemento h3 (onde sera exibida a resposta)

const form = document.querySelector("form");
const resp = document.querySelector("h3");

//cria um "ouvinte" de evento, adicionado quando o botão submit for clicado

form.addEventListener("submit", (e) => {
    const nome = form.inName.value  //obté o nome digitado no form
    resp.innerText = `Ola ${nome}`  //exibe a resposta do programa
    e.preventDefault()              // evita envio do formulário
})