'use strict'

const url = "https://api-senai.herokuapp.com/alunos"

const readStudent = async () => {
    const response = await fetch(url)

    const data = await response.json()

    return data
}

export { readStudent }