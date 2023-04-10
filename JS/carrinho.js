// ========================
//      CARRINHO VAZIO
// ========================
const carrinho = JSON.parse(localStorage.getItem('carrinho'));
if(carrinho) {
	// adicionar a classe "active" aos itens do carrinho
	for(const item of carrinho) {
		const itemId = `#carrinho-item-${item}`;
		const itemElement = document.querySelector(itemId);
		if(itemElement) {
			itemElement.classList.add('active');
		}
	}
	// verificar se a localStorage está vazia
	const carrinhoVazio = carrinho.length === 0;
	// ocultar a mensagem "Carrinho Vazio" se a localStorage não estiver vazia
	const carrinhoNoneElement = document.querySelector('#carrinho-none');
	if(carrinhoNoneElement && !carrinhoVazio) {
		carrinhoNoneElement.style.display = 'none';
	}
}

// ========================
//     CARRINHO REMOVER
// ========================
function removerDoCarrinho(tipo) {
	const carrinho = localStorage.getItem('carrinho');
	if(carrinho) {
		const carrinhoObj = JSON.parse(carrinho);
		const novoCarrinho = carrinhoObj.filter(item => item !== tipo);
		localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));
	}
}

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