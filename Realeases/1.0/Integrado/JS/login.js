// ===================
//  SISTEMA DE LOGIN
// ===================
function isUserLogged() {
	const cookie = document.cookie;
	return cookie.includes("logado=true");
}

const form = document.querySelector("#login-form");
form.addEventListener("submit", function(event) {
	event.preventDefault();
	const senhaInput = document.querySelector("#senha");

	if (isUserLogged()) {
		form.reset();
		senhaInput.value = "";
		senhaInput.classList.add("input-invalid");
		senhaInput.setCustomValidity("Você já está logado!");
		senhaInput.reportValidity();
		return;
	}

	const emailInput = document.querySelector("#email");
	const email = emailInput.value.trim();
	const senha = senhaInput.value.trim();
	const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
	const usuario = usuarios.find((u) => u.email.toLowerCase() === email.toLowerCase() && u.senha === senha);

	if (usuario && usuario.email.toLowerCase() === email.toLowerCase() && usuario.senha === senha) {
		const date = new Date();
		date.setTime(date.getTime() + (24 * 60 * 60 * 1000));
		const expires = "expires=" + date.toUTCString();
		document.cookie = "logado=true;" + expires + ";path=/";
		form.reset();
		window.location.href = "../HTML/carrinho.html";
	} else {
		form.reset();
		senhaInput.value = "";
		senhaInput.classList.add("input-invalid");
		senhaInput.setCustomValidity("E-mail ou senha incorretos");
		senhaInput.reportValidity();
	}
});