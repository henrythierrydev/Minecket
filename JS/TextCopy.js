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

// ================
//    ACCORDION
// ================

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

    if(!isExpanded) {
      content.style.height = `${content.scrollHeight}px`;
      item.classList.add('expanded');
    }
  });
});

// ================
//    CAROUSEL
// ================

let app = document.getElementById('app')
let img_container = document.getElementsByClassName('img-container')
let img = document.getElementsByTagName('img')
let desliza = 1;

setInterval(()=>{
    for(let i=0; i<img_container.length; i++){
        img_container[i].style.transform = `translate(${-desliza * img[i].width}px)`
    }
    
    desliza++
    if(desliza >= img_container.length){
        desliza = 0
    }
},3000)
app.addEventListener('click', ()=>{
    for(let i=0; i<img_container.length; i++){
        img_container[i].style.transform = `translate(${-desliza * img[i].width}px)`
    }
    
    desliza++
    if(desliza >= img_container.length){
        desliza = 0
    }
})