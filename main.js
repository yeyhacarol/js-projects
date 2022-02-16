'use strict'

//coleta itens utilizando seletores css
const container = document.querySelector('main')

function criarElementoInnerHTML() {
    container.innerHTML += '<div>InnerHTML</div>'
}

//para quebrarmos linhas assim devemos usar o acento grave
/* function criarElementoInnerHTML() {
    container.innerHTML += `<div>
                                7
                            </div>`
} */


//para criar um elemento ao final do pai
function criarElementoAppendChild() {
    //criar. Nesse momento ainda não existe no navegador, apenas na memória do computador
    const novaDiv = document.createElement('div')
    //configurar
    novaDiv.id = "sete"
    novaDiv.classList.add('vermelho')
    novaDiv.textContent = 7
    //inserir
    container.appendChild(novaDiv)
}

//para criar um elemento em uma determinada posição do qual eu defino
function criarElementoInsertBefore() {
    //criar
    const novaDiv = document.createElement('div')
    const quintaDiv = document.querySelector('div:nth-child(5)')
    //configurar
    novaDiv.id = "sete"
    novaDiv.classList.add('vermelho')
    novaDiv.textContent = 7
    //inserir
    container.insertBefore(novaDiv, quintaDiv)
}

//criar um elemento que substitui outro em uma determinada posição
function criarElementoReplaceChild() {
    //criar
    const novaDiv = document.createElement('div')
    const quintaDiv = document.querySelector('div:nth-child(5)')
    //configurar
    novaDiv.id = "sete"
    novaDiv.classList.add('vermelho')
    novaDiv.textContent = 7
    //inserir
    container.replaceChild(novaDiv, quintaDiv)
}

//criar um elemento que substitui todos os outros 
function criarElementoReplaceChildren() {
    //criar
    const novaDiv = document.createElement('div')
    //configurar
    novaDiv.id = "sete"
    novaDiv.classList.add('vermelho')
    novaDiv.textContent = 7
    //inserir
    container.replaceChildren(novaDiv)
}

function criarElementoReplaceChildren(numero){
    // 1 - Criar
    const novaDiv = document.createElement('div')

    // 2 - Configurar
    novaDiv.textContent = numero

    // 3 - Inserir
    container.replaceChildren(novaDiv)
}