// ========================
//     VERIFICA O LOGIN
// ========================

// Função que busca o valor de um cookie pelo nome
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

// Função que verifica se o usuário está logado, caso contrário redireciona para a página de login
function verificarSeUsuarioEstaLogado() {
	const logado = getCookie("logado");
	if (!logado || logado !== "true") {
		window.location.href = "../HTML/login.html";
	}
}

// Chamando a função para verificar se o usuário está logado
verificarSeUsuarioEstaLogado();

// ========================
//      CARRINHO VAZIO
// ========================

// Pega os dados na localStorage
const carrinho = JSON.parse(localStorage.getItem('carrinho'));

// Verifica se o carrinho existe
if(carrinho) {
  for(const item of carrinho) {
    const itemId = `#carrinho-item-${item}`;
    const itemElement = document.querySelector(itemId);
    if(itemElement) {
      itemElement.classList.add('active');
    }
  }

  // Verifica se o carrinho está vazio
  const carrinhoVazio = carrinho.length === 0;
  const carrinhoNoneElement = document.querySelector('#carrinho-none');
  
  if(carrinhoNoneElement && !carrinhoVazio) {
    carrinhoNoneElement.style.display = 'none';
  }
}

// ========================
//     CARRINHO REMOVER
// ========================

// Remove um item do carrinho
function removerDoCarrinho(tipo) {
  const carrinho = localStorage.getItem('carrinho');
  if(carrinho) {
    const carrinhoObj = JSON.parse(carrinho);
    const novoCarrinho = carrinhoObj.filter(item => item !== tipo);
    localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));
  }
}

// Adiciona eventos de clique em cada botão
document.getElementById("remover-item-bronze").addEventListener("click", function(event) {
  event.preventDefault();
  removerDoCarrinho('bronze');
  location.reload();
});

document.getElementById("remover-item-prata").addEventListener("click", function(event) {
  event.preventDefault();
  removerDoCarrinho('prata');
  location.reload();
});

document.getElementById("remover-item-ouro").addEventListener("click", function(event) {
  event.preventDefault();
  removerDoCarrinho('ouro');
  location.reload();
});

document.getElementById("remover-item-cosmeticos").addEventListener("click", function(event) {
  event.preventDefault();
  removerDoCarrinho('cosmeticos');
  location.reload();
});