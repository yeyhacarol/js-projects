'use strict'

const openModal = () => document.getElementById('modal').classList.add('active')

const closeModal = () => document.getElementById('modal').classList.remove('active')

document.getElementById('modalClose').addEventListener('click', closeModal)

document.getElementById('cancelar').addEventListener('click', closeModal)

/* exportando função open modal */
export {
    openModal,
    closeModal
}
