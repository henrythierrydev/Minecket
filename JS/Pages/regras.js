// ==================
//   NAVBAR MOBILE
// ==================

const navbars = document.querySelector('.navbars-bars');
const navMobileMenu = document.querySelector('.nav-mobile-menu');

navbars.addEventListener('click', () => {
    navbars.classList.toggle('active');
    navMobileMenu.classList.toggle('active');
});

// ================
//    COPIAR IP
// ================
const copyBtn = document.getElementById("copy-btn");

copyBtn.addEventListener("click", function() {
    var ip = "jogar.minecket.net"; // Adicione o IP do seu servidor aqui

    navigator.clipboard.writeText(ip)
        .then(() => {
            var popup = document.getElementById("play-copy-alert");

            setTimeout(function() {
                popup.classList.add("show");
            }, 50);

            setTimeout(function() {
                popup.classList.remove("show");
            }, 2000);
        });
});
