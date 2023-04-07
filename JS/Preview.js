// Define o tempo limite de carregamento da página em 5 segundos
var timeLimit = 5000;

// Redireciona para a página index.html após 2 segundos
var redirectTimer = setTimeout(function() {
    window.location.href = "../HTML/index.html";
}, 2000);

// Adiciona mensagem de erro caso a página não carregue em 5 segundos
var errorTimer = setTimeout(function() {
    clearTimeout(redirectTimer);
    document.getElementById("loading").style.display = "none";
    document.getElementById("error-message").style.display = "block";
}, timeLimit);