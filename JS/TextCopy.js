function copyIP() {
    var ip = "jogar.minecket.net"; // Adicione o IP do seu servidor aqui

    navigator.clipboard.writeText(ip)
      .then(() => {
        var popup = document.getElementById("play-copy-alert");
        
        // Adicione um pequeno atraso antes de definir a propriedade opacity para 1
        setTimeout(function() {
          popup.classList.add("show");
        }, 50);
        
        // Adicione um pequeno atraso antes de remover a classe "show"
        setTimeout(function() {
          popup.classList.remove("show");
        }, 2000);
    });
}