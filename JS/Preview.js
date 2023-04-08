// Define o tempo limite de carregamento da página em 5 segundos
var timeLimit = 5000;

// Adiciona um ouvinte de eventos para o evento "load"
window.addEventListener("load", function() {
  // Redireciona para a página index.html
  window.location.href = "../HTML/index.html";
});

// Adiciona mensagem de erro caso a página não carregue em 5 segundos
var errorTimer = setTimeout(function() {
  document.getElementById("loading").style.display = "none";
  document.getElementById("error-message").style.display = "block";
}, timeLimit);