function calcularDesconto(valor, disconto) {
    return valor - (valor * (disconto / 100));
}

console.log(calcularDesconto(80, 10)); 