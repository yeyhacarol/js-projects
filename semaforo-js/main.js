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

const automaticoLigado = () => idFarol != null

const desligarAutomatico = () => {
    if (automaticoLigado()) {
        clearInterval(idFarol)
        idFarol = null
    }
} 

const luzesAutomaticas = () => {
    if (farol == 1) {
        luzVermelha()
        farol++
    } else if (farol == 2) {
        luzAmarela()
        farol++
    } else if (farol == 3) {
        luzVerde()
        farol++
    } else if (farol == 4) {
        luzAmarela()
        farol = 1
    }
}

const trocarLuzes = () => {
   if (idFarol == null) {
       idFarol = setInterval(luzesAutomaticas, 900)
   } else {
       clearInterval(idFarol)
       idFarol = null
   } 
}


vermelho.addEventListener('click', () => {
    desligarAutomatico()
    farol = 1
    luzVermelha()
})

amarelo.addEventListener('click', () => {
    desligarAutomatico()
    farol = 2
    luzAmarela()
})

verde.addEventListener('click', () => {
    desligarAutomatico()
    farol = 3
    luzVerde()
})

automatico.addEventListener('click', trocarLuzes)