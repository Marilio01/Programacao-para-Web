function palavraMaisLonga(string) {
    const palavra = string.split(' ');
    return palavra.reduce((maior, atual) => atual.length > maior.length ? atual : maior);
}

console.log(palavraMaisLonga('joao amaral da silva cabral junvente'));