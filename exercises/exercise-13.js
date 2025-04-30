function verificarPropriedade(objeto, propriedade) {
    return objeto.hasOwnProperty(propriedade);
}

console.log(verificarPropriedade({ numero:8 }, 'numero'));