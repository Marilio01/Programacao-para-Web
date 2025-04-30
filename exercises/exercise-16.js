function imprimirQuadro(lista) {
    const tamanhoMax = Math.max(...lista.map(str => str.length));
    const borda = '*'.repeat(tamanhoMax + 8);

    console.log(borda);
    lista.forEach(palavra => {
        console.log(`* ${palavra.padEnd(tamanhoMax)} *`);
    });
    console.log(borda);
}

imprimirQuadro(["marcio", "paulo", "carlos", "palco", "frame"]);