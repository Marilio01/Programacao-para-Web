function calcularPrecoProduto(custo, lucro, frete) {
    return custo + (custo * (lucro / 100)) + frete;
}
console.log(calcularPrecoProduto(100, 20, 30)); 