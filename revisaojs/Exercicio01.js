/*
Faça um script que tenha três variáveis:

• var nome
• let sobreNome
• const cpf

• nome e cpf devem estar em um escopo global
• sobreNome deve estar dentro de uma função
• A execução do programa deve imprimir o nome completo na ordem correta (com quebra de linha):

• Nome
• Sobrenome
• CPF
*/

// Variáveis globais
var nome = "Matheus";
const cpf = "123.456.789-00";

// Função para definir sobrenome
function definirSobrenome() {
    let sobreNome = "Reynaud";
    return sobreNome;
}

// Execução do programa
console.log(nome);
console.log(definirSobrenome());
console.log(cpf);
