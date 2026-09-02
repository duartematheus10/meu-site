// Pega o nome do ficheiro atual da URL (ex: "pagina2.html")
const urlAtual = window.location.pathname.split('/').pop();

// Seleciona todos os links que existem dentro da nossa barra de navegação
const linksMenu = document.querySelectorAll('.links li a');

// Percorre cada link do menu para verificar se corresponde à página atual
linksMenu.forEach(link => {
    const destinoLink = link.getAttribute('href');

    // Se o destino do link for exatamente igual à página onde estamos agora...
    // (A segunda condição garante que a pagina1 fique ativa se a URL estiver vazia na raiz)
    if (destinoLink === urlAtual || (urlAtual === '' && destinoLink === 'index.html')) {
        link.classList.add('ativo'); // Adiciona a classe CSS que criámos
    }
});