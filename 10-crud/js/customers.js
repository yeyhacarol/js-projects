'use strict'



const url = 'https://testeleonid.herokuapp.com/clientes'

/* função para criar os clientes */
const createCustomers = async (customer) => {
    const options = {
        'method': 'POST',
        'body': JSON.stringify(customer),
        'headers': {
            'content-type': 'application/json'
        }
    }

    const response = await fetch(url, options)
    console.log(response.ok)
}

/* função que recebe os dados api e retorna os dados */
const readCustomers = async () => {

    const response = await fetch(url)
    /* testando o retorno
     console.log(await response.json()) 
    */

    return await response.json()
}

const deleteCustomer = async (codigo) => {
    const options = {
        'method': 'DELETE'
    }

    const response = await fetch(`${url}/${codigo}`, options)
    console.log(response.ok)
}


export { 
    createCustomers, 
    readCustomers,
    deleteCustomer
}