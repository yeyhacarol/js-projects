'use strict'

/* função que recebe como parâmetro o id do arquivo resultante do que é selecionado através da input e a imagem em si */
const imagePreview = (idFile, idImage) => {
    //armazenando na variável o que é selecionado no input; utilizando files[0] para resgatar o arquivo e suas propridades diretamente
    const file = document.getElementById(idFile).files[0]
    //armazenando numa variável a imagem propriamente dita
    const preview = document.getElementById(idImage)
    //lendo assíncronamente o conteúdo do arquivo
    const fileReader = new FileReader()

    if (file) {
        //lendo o arquivo apenas se ele for selecionado
        fileReader.readAsDataURL(file)
        //no final da leitura o src do preview, ou seja, da imagem será equivalente ao que foi lido(à url do arquivo selecionado posteriormente)
        fileReader.onloadend = () => preview.src = fileReader.result
    }

    console.log(file)
}

export {
    imagePreview
}