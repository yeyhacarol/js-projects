'use strict'

/* import da função */
import { openModal, closeModal } from './modal.js'
import { createCustomers, readCustomers, readCustomer, updateCustomer, deleteCustomer } from './customers.js'

const createTr = (customer) => {
    const row = document.createElement('tr')
    row.innerHTML =
        `<td>${customer.nome}</td>
        <td>${customer.email}</td>
        <td>${customer.celular}</td>
        <td>${customer.cidade}</td>
        <td>
            <button type="button" class="button green" id="editar-${customer.id}">editar</button>
            <button type="button" class="button red" id="excluir-${customer.id}">excluir</button>
        </td>`

    return row
}

const updateTable = async () => {
    const customersInfo = document.getElementById('customer-info')

    //leitura da api; armazenar resultado numa variável
    const customers = await readCustomers()

    //preencher tabela com dados retornados da api
    const rows = customers.map(createTr)
    customersInfo.replaceChildren(...rows)
}

const saveCustomer = async () => {
    //criar json com as informações do cliente
    const customer = {
        "id": "",
        "nome": document.getElementById('nome').value,
        "email": document.getElementById('email').value,
        "celular": document.getElementById('celular').value,
        "cidade": document.getElementById('cidade').value
    }

    if (document.getElementById('modal').dataset.id)
        await updateCustomer(customer, document.getElementById('modal').dataset.id)
    else {
        //enviar json para o servidor api
        await createCustomers(customer)
    }

    //fechar modal
    closeModal()

    //atualizar tabela
    updateTable()
}

const customerAction = async (event) => {
    if (event.target.type == 'button') {
        const [action, codigo] = event.target.id.split('-')

        if (action == 'editar') {
            openModal()
            let customer = await readCustomer(codigo)

            document.getElementById('nome').value = customer.nome
            document.getElementById('email').value = customer.email
            document.getElementById('celular').value = customer.celular
            document.getElementById('cidade').value = customer.cidade

            document.getElementById('modal').dataset.id = customer.id
            
        } else if (action == 'excluir') {
            await deleteCustomer(codigo)
            updateTable()
        }
    }
}


updateTable()


/** eventos **/
document.getElementById('cadastrarCliente').addEventListener('click', openModal)
document.getElementById('salvar').addEventListener('click', saveCustomer)
document.getElementById('customer-info').addEventListener('click', customerAction)