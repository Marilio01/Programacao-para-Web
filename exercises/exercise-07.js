function calcularMediaArredondada(numeros) {
    const soma = numeros.reduce((total, numero) => total + numero, 0);
    return Math.round(soma / numeros.length);
}

console.log(calcularMediaArredondada([5, 5, 6.5]));