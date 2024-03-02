/*
• Suponha que temos a seguinte página HTML

<!DOCTYPE html>
<html>
    <head>
        <title>Manipulação de DOM</title>
    </head>
    <body>
        <h1 id="titulo">Título da Página</h1>
        <p id="paragrafo">Este é um parágrafo de exemplo.</p>
        <button id="botao" onclick="mudaTexto()">Clique Aqui</button>
        <script src="script.js"></script>

    </body>
</html>

• Crie um script em JS (no arquivo script.js) que tenha uma função “mudaTexto()”, 
ela deve ser responsável por mudar o texto do elemento <h1> para “Novo Título” quando o botão for clicado.

• Dica: para selecionar o elemento você pode utilizar document.getElementById(“id-do-elemento”)

• Com esse elemento selecionado você pode mudar o texto:
variavelQueSelecionouOElemento = innerText = “Novo Título”
*/

function mudaTexto() {
    // Selecionando o elemento h1 pelo ID
    var elementoTitulo = document.getElementById("titulo");
    
    // Mudando o texto do elemento h1
    elementoTitulo = innerText = "Novo Título";

    // Exibindo mensagem no console
    console.log("Texto alterado para: Novo Título");
}
