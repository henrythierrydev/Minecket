// ===================
//    LOGIN SYSTEM
// ===================
// If you don't want to, remove this system by deleting the file.

function isUserLogged() {
	const cookie = document.cookie;
	return cookie.includes("logged=true");
}

const form = document.querySelector("#login-form");
form.addEventListener("submit", function(event) {
	event.preventDefault();
	const senhaInput = document.querySelector("#password");
  
	if(isUserLogged()) {
		form.reset();
		senhaInput.value = "";
		senhaInput.classList.add("input-invalid");
		senhaInput.setCustomValidity("You are already logged in!");
		senhaInput.reportValidity();
		return;
	}
  
	const emailInput = document.querySelector("#email");
	const email = emailInput.value.trim();
	const senha = senhaInput.value.trim();
	const usuarios = JSON.parse(localStorage.getItem("users")) || [];
	const usuario = usuarios.find((u) => u.email.toLowerCase() === email.toLowerCase() && u.senha === senha);
	
  if(usuario && usuario.email.toLowerCase() === email.toLowerCase() && usuario.senha === senha) {
		const date = new Date();
		date.setTime(date.getTime() + (24 * 60 * 60 * 1000));
		const expires = "expires=" + date.toUTCString();
		document.cookie = "logged=true;" + expires + ";path=/";
		form.reset();
		window.location.href = "../HTML/cart.html";
	} else {
		form.reset();
		senhaInput.value = "";
		senhaInput.classList.add("input-invalid");
		senhaInput.setCustomValidity("Incorrect e-mail address or password");
		senhaInput.reportValidity();
	}
});