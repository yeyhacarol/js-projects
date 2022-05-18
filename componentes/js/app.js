'use strict'

import { readStudent } from "./student.js"

const createCard = ({nome, turma, status, foto}) => {
    const card = document.createElement('card-aluno')
    card.setAttribute('data-name', nome)
    card.setAttribute('data-team', turma)
    /*card.setAttribute('data-status', status) */
    card.setAttribute('data-image', foto)

    return card
}

const load = async () => {
    const studentInfo = document.getElementById('card-aluno')

    const students = await readStudent()

    const cards = students.map(createCard)
    studentInfo.replaceChildren(...cards)
}

load()