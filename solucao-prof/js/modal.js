'use strict'
import { imagePreview } from "./imagePreview.js"

const openModal = () => document.getElementById('modal').classList.add('active')

const closeModal = () => {
    document.getElementById('modal').classList.remove('active')

    document.getElementById('modal-form').reset()

    document.getElementById('nome').removeAttribute('data-id')
}

/* função que chama outra função e passa como parâmtros os elementos html idFile e idImage respectivamente */
const loadImage = () => imagePreview('modal-image-input', 'modal-image')

document.getElementById('modalClose').addEventListener('click', closeModal)

document.getElementById('cancelar').addEventListener('click', closeModal)

document.getElementById('modal-image-input').addEventListener('change', loadImage)


export {
    openModal,
    closeModal
}