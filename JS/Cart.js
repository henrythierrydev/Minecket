// ========================
//        EMPTY CART
// ========================

const cart = JSON.parse(localStorage.getItem('cart'));
if (cart) {
  for (const item of cart) {
    const itemId = `#cart-item-${item.split('-')[2]}`;
    const itemElement = document.querySelector(itemId);
    if (itemElement) {
      itemElement.classList.add('active');
    }
  }

  const cartEmpt = cart.length === 0;
  const cartNoneElement = document.querySelector('#cart-none');
  if(cartNoneElement && !cartEmpt) {
    cartNoneElement.style.display = 'none';
  }
}

// ========================
// REMOVE ITEM FROM CART
// ========================

function removeFromCart(type) {
   const cart = localStorage.getItem('cart');
   if(cart) {
      const cartObj = JSON.parse(cart);
      const newCart = cartObj.filter(item => item !== type);
      localStorage.setItem('cart', JSON.stringify(newCart));
   }
}

document.getElementById("remove-item-1").addEventListener("click", function (event) {
   event.preventDefault();
   removeFromCart('cart-item-1');
   location.reload();
});

document.getElementById("remove-item-2").addEventListener("click", function (event) {
   event.preventDefault();
   removeFromCart('cart-item-2');
   location.reload();
});

document.getElementById("remove-item-3").addEventListener("click", function (event) {
   event.preventDefault();
   removeFromCart('cart-item-3');
   location.reload();
});

document.getElementById("remove-item-4").addEventListener("click", function (event) {
   event.preventDefault();
   removeFromCart('cart-item-4');
   location.reload();
});