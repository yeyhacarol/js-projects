'use-strict'

//uma função anônima atribuída a uma variável para capturar o range e atribuir seus valores a um elemento visível quaisquer que seja e em qualquer quantidade; ela é genérica!
const iniciarRange = (idRange) => {
    const range = document.getElementById(idRange);
    const span = document.getElementById(`valor-${idRange}`);

    const atualizarValor = () => span.textContent = range.value
    range.addEventListener('input', atualizarValor);
}

export {iniciarRange}