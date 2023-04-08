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

// ==================
//   NAVBAR MOBILE
// ==================

const navbars = document.querySelector('.navbars-bars');
const navMobileMenu = document.querySelector('.nav-mobile-menu');

navbars.addEventListener('click', () => {
    navbars.classList.toggle('active');
    navMobileMenu.classList.toggle('active');
});