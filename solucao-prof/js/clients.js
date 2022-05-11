'use strict'

const url = 'https://testeleonid.herokuapp.com/clientes'
/* const url = 'http://localhost/carol/backend-php/clientes' */

const readClients = async(id='') => {
    const response = await fetch(`${url}/${id}`)
     return await response.json()
}

const createClient = async(client) => {
    const options = {
        'method': 'POST',
        'body': JSON.stringify(client),
        'headers': {
            'content-type': 'application/json'
        }
    }

    const response = await fetch(url, options)
    console.log ('POST', response)
}

const updateClient = async(client) => {
    const options = {
        'method': 'PUT',
        'body': JSON.stringify(client),
        headers: {
            'content-type': 'application/json'
        }
    }

    const response = await fetch(`${url}/${client.id}`, options)
    console.log('UPDATE', response.ok)
}

const deleteClient = async (codigo) => {
    const options = {
        'method': 'DELETE'
    }
    const response = await fetch(`${url}/${codigo}`, options)
    console.log (response.ok)
}

export{
    readClients,
    createClient,
    updateClient,
    deleteClient
}