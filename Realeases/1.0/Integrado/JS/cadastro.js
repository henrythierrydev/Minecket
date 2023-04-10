// ========================
//   SISTEMA DE REGISTRO
// ========================

const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
const form = document.querySelector("form");
const senhaInput = document.querySelector("#senha");

form.addEventListener("submit", function(event) {
	event.preventDefault();
	const emailInput = document.querySelector("#email");
	const nickInput = document.querySelector("#nick");
	const email = emailInput.value.trim();
	const nick = nickInput.value.trim();
	const senha = senhaInput.value.trim();
	const usuarioExistente = usuarios.find((u) => u.email.toLowerCase() === email.toLowerCase() || u.nick.toLowerCase() === nick.toLowerCase());

	if (usuarioExistente) {
		form.reset();
		const alreadyRegistered = document.getElementById("already-registered");
		alreadyRegistered.classList.add('active');
		setTimeout(() => {
			alreadyRegistered.classList.remove('active');
		}, 3000);
		return;
	}

	if (nick.length < 3 || nick.length > 16) {
		form.reset();
		nickInput.classList.add("input-invalid");
		nickInput.setCustomValidity("Adicione um nick entre 3 a 16 caracteres");
		nickInput.reportValidity();
		setTimeout(() => {
			nickInput.classList.remove("input-invalid");
			nickInput.setCustomValidity("");
		}, 2000);
		return;
	}

	if (senha.length < 8 || senha.length > 64) {
		form.reset();
		senhaInput.classList.add("input-invalid");
		senhaInput.setCustomValidity("Adicione uma senha entre 8 a 64 caracteres");
		senhaInput.reportValidity();
		setTimeout(() => {
			senhaInput.classList.remove("input-invalid");
			senhaInput.setCustomValidity("");
		}, 2000);
		return;
	}

	const cadastrado = document.cookie.split(';').some((item) => item.trim().startsWith('cadastrado='));
	if (cadastrado) {
		form.reset();
		const alreadyRegistered = document.getElementById("sucess-registered");
		alreadyRegistered.classList.add('active');
		setTimeout(() => {
			alreadyRegistered.classList.remove('active');
		}, 3000);
		return;
	}

	const novoUsuario = {
		email: email,
		nick: nick,
		senha: senha
	};

	usuarios.push(novoUsuario);
	localStorage.setItem("usuarios", JSON.stringify(usuarios));
	const date = new Date();
	date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
	const expires = "expires=" + date.toUTCString();
	document.cookie = "cadastrado=true;" + expires + ";path=/";
	form.reset();
	const sucessRegistered = document.getElementById('sucess-registered');
	sucessRegistered.classList.add('active');

	setTimeout(() => {
		sucessRegistered.classList.remove('active');
		location.replace("../HTML/login.html");
	}, 3000);
});

senhaInput.addEventListener("keydown", function(event) {
	if (event.key === "Enter") {
		event.preventDefault();
		form.dispatchEvent(new Event("submit"));
	}
});