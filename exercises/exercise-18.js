function livrosPorAutor(livros, autor) {
    return livros.filter(livro => livro.autor === autor);
}
const livros = [
    { titulo: "O Alienista", autor: "Machado de Assis", ano: 1882 },
    { titulo: "Quincas Borba", autor: "Machado de Assis", ano: 1891 },
    { titulo: "Esaú e Jacó", autor: "Machado de Assis", ano: 1904 },
    { titulo: "Memorial de Aires", autor: "Machado de Assis", ano: 1908 },
    { titulo: "Sagarana", autor: "Guimarães Rosa", ano: 1946 },
    { titulo: "Primeiras Estórias", autor: "Guimarães Rosa", ano: 1962 },
    { titulo: "Tutaméia", autor: "Guimarães Rosa", ano: 1967 },
    { titulo: "Caetés", autor: "Graciliano Ramos", ano: 1933 },
    { titulo: "São Bernardo", autor: "Graciliano Ramos", ano: 1934 },
    { titulo: "Angústia", autor: "Graciliano Ramos", ano: 1936 },
    { titulo: "Gabriela, Cravo e Canela", autor: "Jorge Amado", ano: 1958 },
    { titulo: "Dona Flor e Seus Dois Maridos", autor: "Jorge Amado", ano: 1966 },
    { titulo: "Teresa Batista Cansada de Guerra", autor: "Jorge Amado", ano: 1972 },
];
console.log(livrosPorAutor(livros, "Machado de Assis"));