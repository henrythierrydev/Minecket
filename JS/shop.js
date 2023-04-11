// =====================
//     POPUP SYSTEM
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

// POPUP FOR ITEM SHOP 1

const popup1 = document.getElementById("benefits-1");
const overlay1 = document.querySelector(".overlay");
setupPopup(
    document.getElementById("open-popup-1"),
    document.getElementById("close-popup-1"),
    popup1,
    overlay1
);

// POPUP FOR ITEM SHOP 2

const popup2 = document.getElementById("benefits-2");
const overlay2 = document.querySelector(".overlay");
setupPopup(
    document.getElementById("open-popup-2"),
    document.getElementById("close-popup-2"),
    popup2,
    overlay2
);

// POPUP FOR ITEM SHOP 3

const popup3 = document.getElementById("benefits-3");
const overlay3 = document.querySelector(".overlay");
setupPopup(
    document.getElementById("open-popup-3"),
    document.getElementById("close-popup-3"),
    popup3,
    overlay3
);

// POPUP FOR ITEM SHOP 4

const popup4 = document.getElementById("benefits-4");
const overlay4 = document.querySelector(".overlay");
setupPopup(
    document.getElementById("open-popup-4"),
    document.getElementById("close-popup-4"),
    popup4,
    overlay4
);

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

// BUY FOR ITEM SHOP 1

const buyBronzeBtn = document.getElementById('buy-item-1');
buyBronzeBtn.addEventListener('click', (event) => {
    event.preventDefault();
    addToCart('item-1');
    const successPopup = document.getElementById('success-add');
    successPopup.classList.add('active');
    
    setTimeout(() => {
        successPopup.classList.remove('active');
    }, 4000);
});

// BUY FOR ITEM SHOP 2

const buySilverBtn = document.getElementById('buy-item-2');
buySilverBtn.addEventListener('click', (event) => {
    event.preventDefault();
    addToCart('item-2');
    const successPopup = document.getElementById('success-add');
    successPopup.classList.add('active');
    
    setTimeout(() => {
        successPopup.classList.remove('active');
    }, 4000);
});

// BUY FOR ITEM SHOP 3

const buyGoldBtn = document.getElementById('buy-item-3');
buyGoldBtn.addEventListener('click', (event) => {
    event.preventDefault();
    addToCart('item-3');
    const successPopup = document.getElementById('success-add');
    successPopup.classList.add('active');
    
    setTimeout(() => {
        successPopup.classList.remove('active');
    }, 4000);
});

// BUY FOR ITEM SHOP 4

const buyCosmeticsBtn = document.getElementById('buy-item-4');
buyCosmeticsBtn.addEventListener('click', (event) => {
    event.preventDefault();
    addToCart('item-4');
    const successPopup = document.getElementById('success-add');
    successPopup.classList.add('active');
    
    setTimeout(() => {
        successPopup.classList.remove('active');
    }, 4000);
});