'use strict'

import { readStudent } from "./student.js"

const load = () => {
    const container = document.getElementById('container')

    let cards = readStudent()
        .then(data => data)
        .then(data => {
            data.map(student => {
                const card = document.createElement('card-aluno')
                card.setAttribute('data-name', student.nome)
                card.setAttribute('data-image', student.foto)
                card.setAttribute('data-status', student.status)

                const bgcolor = card.getAttribute('data-status')
                if (bgcolor == 'aprovado') {
                    card.setAttribute('data-bgcolor', '#3ecf62')
                } else if (bgcolor == 'reprovado') {
                    card.setAttribute('data-bgcolor', '#cf3e3e')
                }

                container.appendChild(card)
            })
        })
}

load()