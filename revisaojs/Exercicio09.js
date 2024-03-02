/*
• Faça uma classe, em JS, “Pessoa” que possua as propriedades: nome, idade e profissao.

• Esta classe vai possuir o método “exibirInfo()” que vai printar:
• Nome: …, Idade: …, Profissao: …

• Fora da classe crie um objeto Pessoa em uma variável.
• Chame o método exibirInfo() através do seu novo objeto.
*/

// Definição da classe Pessoa
class Pessoa {
    constructor(nome, idade, profissao) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }

    // Método para exibir informações da pessoa
    exibirInfo() {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Profissao: ${this.profissao}`);
    }
}

// Criando um objeto Pessoa fora da classe
const pessoa1 = new Pessoa("Matheus", 30, "Estudante");

// Chamando o método exibirInfo() através do objeto pessoa1
pessoa1.exibirInfo();
