function calcularMediaAlunos(alunos) {
    const soma = alunos.reduce((acc, aluno) => acc + aluno.nota, 0);
    return soma / alunos.length;
}

console.log(
    calcularMediaAlunos([
        { nome: 'Marilio', nota: 10 },
        { nome: 'Marcos', nota: 8 }
    ])
); 