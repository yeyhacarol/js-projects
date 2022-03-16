'use strict'

const pesquisarRacas = async() => {
    const url = 'https://dog.ceo/api/breeds/list/all'
    const response = await fetch(url)
    const data = await response.json() /* para extrairmos da resposta apenas os dados */

    return Object.keys(data.message)
}

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

const carregarRacas = async() => {
    const lista = document.getElementById('lista-racas')
    const racas = await pesquisarRacas()
    lista.innerHTML = `<option>
                            ${racas.join("</option><option>")}
                        </option>`

}

//modal 

const abrirModal = () => {
    document.getElementById('pageModal').classList.add('active')
}

const fecharModal = () => {
    document.getElementById('pageModal').classList.remove('active')
}



document.getElementById('btnModal').addEventListener('click', abrirModal)
document.getElementById('btnFechar').addEventListener('click', fecharModal)
document.getElementById('pageModal').addEventListener('click', fecharModal)

document.getElementById('pesquisar').addEventListener('click', carregarImagens)
carregarRacas()