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
	const passwordInput = document.querySelector("#password");
  
	if (isUserLogged()) {
	  form.reset();
	  passwordInput.value = "";
	  passwordInput.classList.add("input-invalid");
	  passwordInput.setCustomValidity("You are already logged in!");
	  passwordInput.reportValidity();
	  return;
	}
  
	const emailInput = document.querySelector("#email");
	const email = emailInput.value.trim();
	const password = passwordInput.value.trim();
	const usuarios = JSON.parse(localStorage.getItem("users")) || [];
	const usuario = usuarios.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
  
	if (usuario) {
	  const date = new Date();
	  date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
	  const expires = "expires=" + date.toUTCString();
	  document.cookie = "logged=true;" + expires + ";path=/";
	  form.reset();
	  window.location.href = "../HTML/Cart.html";
	} else {
	  form.reset();
	  passwordInput.value = "";
	  passwordInput.classList.add("input-invalid");
	  passwordInput.setCustomValidity("Incorrect email address or password");
	  passwordInput.reportValidity();
	}
  });