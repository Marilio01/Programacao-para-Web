function contarDigitosParesImpares(numero) {
    const digitos = numero.toString().split('');
    let pares = 0;
    let impares = 0;

    for (const digito of digitos) {
        const n = parseInt(digito);
        if (n % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }

    return { pares, impares };
}

console.log(contarDigitosParesImpares(78646574565673675368756387334546376));