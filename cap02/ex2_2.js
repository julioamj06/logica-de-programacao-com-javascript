//criar referência ao form e aos elementos h3 e h4 (respostas)
const fmr = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

//cria um "ouvinte" de evento, acionado quando o botão submit for clicado
fmr.addEventListener("submit", (e) =>{
    const titulo = fmr.inTitulo.value;       //obtem conteudo dos campos
    const duracao = Number(fmr.inDuracao.value);

    const horas = Math.floor(duracao / 60);   //arredonda para baixo o resultado
    const minutos = duracao % 60;             // modulo obtem o resto da divisao

    resp1.innerText = titulo;                 //exibe as respostas
    resp2.innerText = `${horas} hora(s) e ${minutos.toFixed()}`;

    e.preventDefault()                        //evita o envio do formulário
})