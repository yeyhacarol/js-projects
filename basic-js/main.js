//declarando váriáveis
const titulo = document.getElementById('titulo');
const nome = document.getElementById('nome');

//criando função/método para substituir o título pelo texto digitado
//textContent para acessarmos o conteúdo da tag; value quando não há conteúdo na tag 
function tituloVermelho() {
    titulo.textContent = nome.value;
    titulo.classList.add('vermelho');
}

function tituloAzul() {
    titulo.textContent = nome.value;
    titulo.classList.add('azul');
}

function tituloVerde() {
    titulo.textContent = nome.value;
    titulo.classList.add('verde');
}

//definindo o que acontecerá dentro do botão
vermelho.addEventListener('click', tituloVermelho);
azul.addEventListener('click', tituloAzul);
verde.addEventListener('click', tituloVerde);