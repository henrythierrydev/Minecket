const openPopup1 = document.getElementById("open-popup-1");
const closePopup1 = document.getElementById("close-popup-1");
const popup1 = document.getElementById("beneficios-1");
const overlay1 = document.querySelector(".overlay");

openPopup1.addEventListener("click", function(event) {
  event.preventDefault();
  popup1.classList.add("popup-active");
  overlay1.style.display = "block";
});

closePopup1.addEventListener("click", function(event) {
  event.preventDefault();
  popup1.classList.remove("popup-active");
  overlay1.style.display = "none";
});






const openPopup2 = document.getElementById("open-popup-2");
const closePopup2 = document.getElementById("close-popup-2");
const popup2 = document.getElementById("beneficios-2");
const overlay2 = document.querySelector(".overlay");

openPopup2.addEventListener("click", function(event) {
  event.preventDefault();
  popup2.classList.add("popup-active");
  overlay2.style.display = "block";
});

closePopup2.addEventListener("click", function(event) {
  event.preventDefault();
  popup2.classList.remove("popup-active");
  overlay2.style.display = "none";
});





const openPopup3 = document.getElementById("open-popup-3");
const closePopup3 = document.getElementById("close-popup-3");
const popup3 = document.getElementById("beneficios-3");
const overlay3 = document.querySelector(".overlay");

openPopup3.addEventListener("click", function(event) {
  event.preventDefault();
  popup3.classList.add("popup-active");
  overlay3.style.display = "block";
});

closePopup3.addEventListener("click", function(event) {
  event.preventDefault();
  popup3.classList.remove("popup-active");
  overlay3.style.display = "none";
});




const openPopup4 = document.getElementById("open-popup-4");
const closePopup4 = document.getElementById("close-popup-4");
const popup4 = document.getElementById("beneficios-4");
const overlay4 = document.querySelector(".overlay");

openPopup4.addEventListener("click", function(event) {
  event.preventDefault();
  popup4.classList.add("popup-active");
  overlay4.style.display = "block";
});

closePopup4.addEventListener("click", function(event) {
  event.preventDefault();
  popup4.classList.remove("popup-active");
  overlay4.style.display = "none";
});


