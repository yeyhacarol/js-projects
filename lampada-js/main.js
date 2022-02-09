'use strict'

const lampada = document.getElementById('lampada')
const ligar = document.getElementById('ligar')
const desligar = document.getElementById('desligar')
const piscar = document.getElementById('piscar')
let idPiscar = null

//método includes verifica se há essa palavra na url da imagem
const lampadaQuebrada = () => {
    return lampada.src.includes('quebrada')
}

//arrow function. Substuímos a imagem por outra através do click no botão e na própria imagem
const acender = () => {
    if (!lampadaQuebrada()) {
        lampada.src = './img/ligada.jpg'
    }
}

const apagar = () => {
    if (!lampadaQuebrada()) {
        lampada.src = './img/desligada.jpg'
    }
}

const lampadaDesligada = () => {
    return lampada.src.includes('desligada')
}

const ligaDesliga = () => {
    if (lampadaDesligada()) {
        acender()
    } else {
        apagar()
    }
}

const piscaPisca = () => {
    /*o método setTimeout define qual método será executado dependendo do tempo que é passado em ms. 
        Dessa maneira conseguimos fazer outras ações na tela e mesmo assim será executada em determinado tempo.
         setTimeout(acender, 1000) 
         Tal condição para que ele não possua ação acumulativa de tempo*/
    if (idPiscar == null) {
       idPiscar = setInterval(ligaDesliga, 500)
       piscar.textContent = 'Parar'
    } else {
        clearInterval(idPiscar)
        piscar.textContent = 'Piscar'
        idPiscar = null
    }
}

const quebrar = () => lampada.src = './img/quebrada.jpg'
const reconstruir = () => lampada.src = './img/desligada.jpg'

//aqui estamos apenas referenciando a função, com o () nós a evocamos! Há diferenças. Apenas adicionando eventos de click nos elementos
ligar.addEventListener('click', acender)
desligar.addEventListener('click', apagar)
lampada.addEventListener('dblclick', quebrar) /* 'dblclick para duplo click */
lampada.addEventListener('click', reconstruir)
piscar.addEventListener('click', piscaPisca)