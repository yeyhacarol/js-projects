'use strict'

const pesquisarCachorro = async (raca) => {
    const url = `https://dog.ceo/api/breed/${raca}/images`
    const response = await fetch(url)
    const data = await response.json()

    return data
}

const criarImg = (imagem) => {
    const img = document.createElement('img')
    img.src = imagem

    return img
}

const carregarImagens = async () => {
    const raca = document.getElementById('raca').value
    const container = document.getElementById('image-container')

    const imagens = await pesquisarCachorro(raca)

    const tagImgs = imagens.message.map(criarImg)

    container.replaceChildren(...tagImgs)
}

document.getElementById('pesquisar').addEventListener('click', carregarImagens)