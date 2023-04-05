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


const newsItems = document.querySelectorAll('.news-item');

newsItems.forEach(item => {
  const title = item.querySelector('.news-item-title');
  const content = item.querySelector('.news-item-content');

  title.addEventListener('click', () => {
    const isExpanded = item.classList.contains('expanded');
    newsItems.forEach(item => {
      item.classList.remove('expanded');
      item.querySelector('.news-item-content').style.height = '0';
    });

    if (!isExpanded) {
      content.style.height = `${content.scrollHeight}px`;
      item.classList.add('expanded');
    }
  });
});
