'use strict'

const imagens = [
    {id: '1', url:'./img/angular.png'},
    {id: '2', url:'./img/react.png'},
    {id: '3', url:'./img/svelte.jpg'},
    {id: '4', url:'./img/vue.jpg'},
    {id: '5', url:'./img/girassol.webp'},
]

/* cria span do botão anterior */
const criarAnterior = () => {
    const anteriorButton = document.createElement('span')
    anteriorButton.classList.add('slider-button')
    anteriorButton.id = 'anterior'
    anteriorButton.innerHTML = '&laquo;'

    return anteriorButton
}

/* span de botão próximo */
const criarProximo = () => {
    const proximoButton = document.createElement('span')
    proximoButton.classList.add('slider-button')
    proximoButton.id = 'proximo'
    proximoButton.innerHTML = '&raquo;'

    return proximoButton
}

/* div das imagens */
const criarSlides = () => {
    const sliderContainer = document.createElement('div')
    sliderContainer.classList.add('slider-item-container')

    const slides = imagens.map(item => `
        <div class="slider-item">
            <img src="${item.url}" alt="react">
        </div>
    `)

    sliderContainer.innerHTML = slides.join("")

    return sliderContainer
}


const criarSlider = () => {
    const slider = document.querySelector('.slider')

    /* inserindo elementos html no dom (página) */
    slider.appendChild(criarAnterior())
    slider.appendChild(criarSlides())
    slider.appendChild(criarProximo())
}

criarSlider(imagens)

const sliderItemContainer = document.querySelector('.slider-item-container')
let sliderItems = document.querySelectorAll('.slider-item')

const proximoItem = () => {
    const primeiroItem = sliderItems[0]

    sliderItemContainer.appendChild(primeiroItem)

    sliderItems = document.querySelectorAll('.slider-item')
}

const anteriorItem = () => {
    const ultimoItem = sliderItems[sliderItems.length - 1]

    sliderItemContainer.prepend(ultimoItem)

    sliderItems = document.querySelectorAll('.slider-item')
}


document.getElementById('anterior').addEventListener('click', anteriorItem) 
document.getElementById('proximo').addEventListener('click', proximoItem) 

