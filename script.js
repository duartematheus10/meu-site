// Capturando o formulário e a div de mensagem usando manipulação de DOM
const formulario = document.getElementById('formContato');
const divResultado = document.getElementById('resultado-form');

// EVENTOS JAVASCRIPT
formulario.addEventListener('submit', function(event) {
    
    // ATUALIZAÇÃO SEM RECARREGAR A PÁGINA
    event.preventDefault(); 

    // Capturando os valores digitados
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    // Mostra a div de resultado na tela
    divResultado.style.display = 'block';

    // VALIDAÇÃO DE DADOS (Campo 1: Nome)
    if (nome.length < 1) {
        exibirMensagem('Aviso: O Campo nome não pode estar vazio!', '#f8d7da', '#721c24');
        return; // Interrompe a execução
    }

    // VALIDAÇÃO DE DADOS (Campo 2: E-mail)
    if (!email.includes('@') || !email.includes('.')) {
        exibirMensagem('Aviso: Por favor, insira um e-mail válido.', '#f8d7da', '#721c24');
        return; 
    }

    // Validação extra (Mensagem não pode ser vazia)
    if (mensagem === '') {
        exibirMensagem('Aviso: O Campo Mensagem não pode estar vazio!', 'rgba(255, 0, 0, 0.1)', '#ff4d4d');
        return;
    }

    // MANIPULAÇÃO DO DOM (Mensagem de Sucesso)
    exibirMensagem('Sua mensagem foi enviada com sucesso.', 'rgba(0, 255, 128, 0.1)', '#00ff80');
    
    // Limpa o formulário
    formulario.reset();
});

// Função auxiliar para mudar o visual da mensagem no DOM
function exibirMensagem(texto, corFundo, corTexto) {
    divResultado.innerText = texto;
    divResultado.style.backgroundColor = corFundo;
    divResultado.style.color = corTexto;
    divResultado.style.border = `2px solid ${corTexto}`;
}