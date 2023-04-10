// =====================
//   SISTEMA DE POPUP
// =====================

function setupPopup(openBtn, closeBtn, popup, overlay) {
	openBtn.addEventListener("click", function(event) {
		event.preventDefault();
		popup.classList.add("popup-active");
		overlay.style.display = "block";
	});

	closeBtn.addEventListener("click", function(event) {
		event.preventDefault();
		popup.classList.remove("popup-active");
		overlay.style.display = "none";
	});
}

const popup1 = document.getElementById("beneficios-1");
const overlay1 = document.querySelector(".overlay");
setupPopup(
	document.getElementById("open-popup-1"),
	document.getElementById("close-popup-1"),
	popup1,
	overlay1
);

const popup2 = document.getElementById("beneficios-2");
const overlay2 = document.querySelector(".overlay");
setupPopup(
	document.getElementById("open-popup-2"),
	document.getElementById("close-popup-2"),
	popup2,
	overlay2
);

const popup3 = document.getElementById("beneficios-3");
const overlay3 = document.querySelector(".overlay");
setupPopup(
	document.getElementById("open-popup-3"),
	document.getElementById("close-popup-3"),
	popup3,
	overlay3
);

const popup4 = document.getElementById("beneficios-4");
const overlay4 = document.querySelector(".overlay");
setupPopup(
	document.getElementById("open-popup-4"),
	document.getElementById("close-popup-4"),
	popup4,
	overlay4
);

// =====================
//   SISTEMA DE COMPRA
// =====================

function getCookie(name) {
	const cookies = document.cookie.split("; ");
	for (let i = 0; i < cookies.length; i++) {
		const cookie = cookies[i].split("=");
		if (cookie[0] === name) {
			return cookie[1];
		}
	}
	return "";
}

function adicionarAoCarrinho(item) {
	const carrinho = localStorage.getItem('carrinho');
	if (carrinho) {
		const carrinhoObj = JSON.parse(carrinho);
		if (!carrinhoObj.includes(item)) {
			carrinhoObj.push(item);
			localStorage.setItem('carrinho', JSON.stringify(carrinhoObj));
		}
	} else {
		localStorage.setItem('carrinho', JSON.stringify([item]));
	}
}

function redirecionarParaPaginaDeLogin() {
	window.location.href = "../HTML/login.html";
}

function comprarHandler(event, item) {
	event.preventDefault();
	const logado = getCookie('logado');
	if (logado !== 'true') {
		redirecionarParaPaginaDeLogin();
		return;
	}
	adicionarAoCarrinho(item);
	const sucessAddPopup = document.getElementById('sucess-add');
	sucessAddPopup.classList.add('active');
	setTimeout(() => {
		sucessAddPopup.classList.remove('active');
	}, 4000);
}

const btnComprarBronze = document.getElementById('comprar-bronze');
btnComprarBronze.addEventListener('click', (event) => {
	comprarHandler(event, 'bronze');
});

const btnComprarPrata = document.getElementById('comprar-prata');
btnComprarPrata.addEventListener('click', (event) => {
	comprarHandler(event, 'prata');
});

const btnComprarOuro = document.getElementById('comprar-ouro');
btnComprarOuro.addEventListener('click', (event) => {
	comprarHandler(event, 'ouro');
});

const btnComprarCosmeticos = document.getElementById('comprar-cosmeticos');
btnComprarCosmeticos.addEventListener('click', (event) => {
	comprarHandler(event, 'cosmeticos');
});