// =====================
//   PURCHASE SYSTEM
// =====================

function addToCart(item) {
    const cart = localStorage.getItem('cart');
    if(cart) {
        const cartObj = JSON.parse(cart);
        if(!cartObj.includes(item)) {
            cartObj.push(item);
            localStorage.setItem('cart', JSON.stringify(cartObj));
        }
    } else {
        localStorage.setItem('cart', JSON.stringify([item]));
    }
}

function buyItem(button, item) {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        addToCart(item);
        const successPopup = document.getElementById('success-add');
        successPopup.classList.add('active');
        setTimeout(() => {
            successPopup.classList.remove('active');
        }, 4000);
    });
}

// BUY FOR ITEM SHOP 1
buyItem(
    document.getElementById('buy-item-1'),
    'cart-item-1'
);

// BUY FOR ITEM SHOP 2
buyItem(
    document.getElementById('buy-item-2'),
    'cart-item-2'
);

// BUY FOR ITEM SHOP 3
buyItem(
    document.getElementById('buy-item-3'),
    'cart-item-3'
);

// BUY FOR ITEM SHOP 4
buyItem(
    document.getElementById('buy-item-4'),
    'cart-item-4'
);