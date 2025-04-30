function calcularIdade(anodeNascimento) {
    const anoAtual = new Date().getFullYear();
    return anoAtual - anodeNascimento;
}
console.log(calcularIdade(1988));  