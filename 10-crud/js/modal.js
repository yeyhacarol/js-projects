'use strict'

const openModal = () => document.getElementById('modal').classList.add('active')

const closeModal = () => {
    document.getElementById('modal').classList.remove('active')

    document.getElementById('nome').value = ''
    document.getElementById('email').value = ''
    document.getElementById('celular').value = ''
    document.getElementById('cidade').value = ''
    document.getElementById('modal').dataset.id = ''
}
document.getElementById('modalClose').addEventListener('click', closeModal)

document.getElementById('cancelar').addEventListener('click', closeModal)

/* exportando função open modal */
export {
    openModal,
    closeModal
}
