// =====================
//     CARREGAMENTO
// =====================

var timeLimit = 5000;
window.addEventListener("load", function() {
	// Redireciona para a página index.html
	window.location.href = "../HTML/index.html";
});

var errorTimer = setTimeout(function() {
	document.getElementById("loading").style.display = "none";
	document.getElementById("error-message").style.display = "block";
}, timeLimit);