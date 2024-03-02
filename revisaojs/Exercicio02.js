/*
Faça um script que contenha uma função:

objetivoDaDisciplina(tecnologia)

• A função deve retornar a string: “Meu objetivo é aprender [parâmetro tecnologia]”
• Fora da função defina uma const tecnologia que possua o valor “React”.
• Chame a execução da função para que a mesma retorne: “Meu objetivo é aprender React”
*/

// Definição da função objetivoDaDisciplina
function objetivoDaDisciplina(tecnologia) {
    return `Meu objetivo é aprender ${tecnologia}`;
}

// Definição da constante tecnologia
const tecnologia = "React";

// Chamada da função e impressão do resultado
console.log(objetivoDaDisciplina(tecnologia));
