'use strict'

/* criando função para poder fazer uma requisição a uma determinada uri. 
    fazemos utilizando função para que possamos definir seu tipo como sendo assícrono. 
    a função recebe o parâmetro cep que depois é passado no caminho da url para ser especificado quando invocado(),
    a variável response recebe um método FETCH, esse é o método responsável por fazer a requisição(promisse), quando dizemos AWAIT 
    pedimos para que o método aguarde até que a resquisição seja concluída com sucesso, ou seja, até que haja a resposta do servidor; 
    depois utilizamos o método JSON para que a exibição seja dos dados relacionados ao cep como: rua, bairro, uf etc.
*/
const pesquisarCep = async (cep) => {
    const url = `https://viacep.com.br/ws/${cep}/json`

    const response = await fetch(url)

    const data = await response.json()
    
    console.log(data)

}

pesquisarCep('06655360')