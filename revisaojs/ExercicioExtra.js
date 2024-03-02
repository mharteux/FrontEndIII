/*
Dobrando os NúmerosObjetivo: Escreva uma função em JavaScript que utilize a função map para dobrar os valores de uma lista de números.

Descrição:
Você tem uma lista de números: [1, 2, 3, 4, 5].
Sua tarefa é escrever uma função que utilize a função map para iterar sobre esta lista e dobrar cada número.
A função deve retornar a nova lista com os números dobrados.

Instruções:Crie uma lista de números. Por exemplo, você pode começar com a lista [1, 2, 3, 4, 5].
Utilize a função map para iterar sobre esta lista. Dentro da função passada ao map, retorne o valor atual multiplicado por 2.
Armazene o resultado da operação de mapeamento em uma nova variável. Retorne ou imprima a nova lista de números dobrados.
*/

function dobrarNumeros(lista) {
    // Função map para dobrar cada número na lista
    const numerosDobrados = lista.map(numero => numero * 2);
    return numerosDobrados;
}

// Lista de números iniciais
const numeros = [1, 2, 3, 4, 5];

// Chamando a função dobrarNumeros com a lista de números
const numerosDobrados = dobrarNumeros(numeros);

// Imprimindo a nova lista com os números dobrados
console.log(numerosDobrados);
