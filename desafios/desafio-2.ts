// Como podemos melhorar o esse código usando TS? 

// let pessoa1 = {};
// pessoa1.nome = "maria";
// pessoa1.idade = 29;
// pessoa1.profissao = "atriz"
// let pessoa2 = {}
// pessoa2.nome = "roberto";
// pessoa2.idade = 19;
// pessoa2.profissao = "Padeiro";
// let pessoa3 = {
//     nome: "laura",
//     idade: "32",
//     profissao: "Atriz"
// };
// let pessoa4 = {
//     nome = "carlos",
//     idade = 19,
//     profissao = "padeiro"
// }

// o uso de interface para definir o tipo de dadods a ser inserido durante a criacao dos objetos.
interface Pessoa {
    nome: string;
    idade: number;
    profissao: string;
}

let pessoa1 : Pessoa = {nome: 'jhon', idade: 29, profissao: 'developer'};
console.log(pessoa1);
