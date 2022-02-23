'use strict'

const numeros = [20, 131, 70, 279, 320]

//acrescentando 100 a cada elemento
// -- paradigma imperativo -- \\
/* let numeros100= [] */
//é importante declarar a variável index pois senão ela será global
/* for (let index = 0; index < numeros.length - 1; index++) {
    numeros100[index] = numeros[index] + 100; 
} */

// -- paradigma declarativo -- \\
//método map() para percorrermos cada elemento do array, permitindo a modificação dele e o retornando no mesmo tamanho; 
//ele pode receber 3 parâmetros (opcionais): elemento do array, índice e array
/* const somar100 = (numero) => numero + 100
const numeros100 = numeros.map(somar100) */

// -- array com numeros < 100 -- \\
/* let numerosMenor100 = []
for (let index = 0; index <= numeros.length; index++) {
    if (numeros[index] <= 100) {
        numerosMenor100[index] = numeros[index] 
    }
} 

console.log("menores que 100: ", numeros100)*/

//filter() percorre e filtra os dados do array dependendo da condição; retorna um array de mesmo tamanho, requer os mesmos parâmetros de map()
/* const menor100 = (numero) => numero <= 100
const numerosMenores100 = numeros.filter(menor100)

console.log("menores que 100: ", numerosMenores100) */

// -- somar elementos do array -- \\
/* let somaArray = 0
for (let index = 0; index <= numeros.length -1; index++) {
    somaArray += numeros[index]
}

console.log(somaArray) */

// soma dos elementos utilizando reduce de maneira declarativa. Tal método percorre todo o array aplicando uma função(callback),
// retornando um único valor; os parâmetros são: acumulador, elemento, índice e array
/* const soma = (a, b) => a + b
const total = numeros.reduce(soma, 0)

console.log(total) */

// -- criar array com valores ao quadrado -- \\
const numerosAoQuadrado = (numero) => numero * numero
const aoQuadrado = numeros.map(numerosAoQuadrado) 

console.log(aoQuadrado)

// -- criar array com valores pares -- \\
const numerosPares = (pares) => pares % 2 == 0
const par = numeros.filter(numerosPares)

console.log(par)

// -- calcular média dos valores -- \\
const mediaNumeros = (acumulador, elemento) => acumulador + elemento
const media = numeros.reduce(mediaNumeros, 0)
const mediaFinal = media / numeros.length

console.log(mediaFinal)

// -- calcular a soma dos valores ímpares -- \\
const numerosImpares = (impares) => impares % 2 == 1
const impar = numeros.filter(numerosImpares)
const somarImpares = (a, b) => a + b 
const somaImpares = impar.reduce(somarImpares)

console.log(somaImpares)

// -- calcular valor total, sabendo que cada valor teve 20% de desconto -- \\
const menos20porcento = (numeros) => numeros - (numeros * 0.2)
const arrayMenosPorcento = numeros.map(menos20porcento)

const somaArray = (a, b) => a + b
const total = arrayMenosPorcento.reduce(somaArray)

console.log(total)




