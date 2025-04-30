function filtrarStringsMaiorQueCinco(lista) {
    return lista.filter(str => str.length > 5);
}

console.log(filtrarStringsMaiorQueCinco(["casas", "galo", "palmeira",]));