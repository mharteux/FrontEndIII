/*
• Faça um script que contenha um array chamado notas, esse array armazena 3 notas de um aluno.

• O programa deve imprimir:

• A primeira nota do aluno é: …
• A segunda nota do aluno é: …
• A terceira nota do aluno é: …
• A média do aluno é: …

OBS: Cálculo da média: (soma das
notas)/quantidade de notas
*/

// Definição do array de notas
const notas = [7.5, 8.5, 9.5];

// Função para calcular a média
const calcularMedia = (notas) => {
    let soma = 0;
    for (let nota of notas) {
        soma += nota;
    }
    return soma / notas.length;
}

// Impressão das notas e da média
console.log("A primeira nota do aluno é: " + notas[0]);
console.log("A segunda nota do aluno é: " + notas[1]);
console.log("A terceira nota do aluno é: " + notas[2]);
console.log("A média do aluno é: " + calcularMedia(notas));
