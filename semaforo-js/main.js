'use strict'

const semaforo = document.getElementById('semaforo')
const vermelho = document.getElementById('vermelho')
const amarelo = document.getElementById('amarelo')
const verde = document.getElementById('verde')
const automatico = document.getElementById('automatico')
let idFarol = null
let farol = 1

const luzVermelha = () => semaforo.src = './img/vermelho.png'

const luzAmarela = () => semaforo.src = './img/amarelo.png'

const luzVerde = () => semaforo.src = './img/verde.png'

const luzes = () => {
    if (farol == 1) {
        luzVerde()
        farol++
    } else if (farol == 2) {
        luzAmarela()
        farol++
    } else if (farol == 3) {
        luzVermelha()
        farol = 1
    }
}

const trocarLuzes = () => {
   if (idFarol == null) {
       idFarol = setInterval(luzes, 500)
   } else {
       clearInterval(idFarol)
       idFarol = null
   } 
}


vermelho.addEventListener('click', luzVermelha)
amarelo.addEventListener('click', luzAmarela)
verde.addEventListener('click', luzVerde)
automatico.addEventListener('click', trocarLuzes)