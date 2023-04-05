// =======================
//  SISTEMA DE ACCORDION
// =======================

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
