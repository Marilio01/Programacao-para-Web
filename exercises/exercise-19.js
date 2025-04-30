function pessoaMaisVelha(pessoas) {
    return pessoas.reduce((maisVelha, pessoa) => pessoa.idade > maisVelha.idade ? pessoa : maisVelha).nome;
}
const pessoas = [
    { nome: "carlos", idade: 99 },
    { nome: "joao", idade: 39 }
]
console.log(
    pessoaMaisVelha(pessoas));