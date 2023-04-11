// ==================
//      COPY IP
// ==================

const copyBtn = document.getElementById("copy-btn");

copyBtn.addEventListener("click", function(event) {
	event.preventDefault();
	var ip = "jogar.minecket.net"; // Add your server's IP here
	navigator.clipboard.writeText(ip).then(() => {
		var popup = document.getElementById("play-copy-alert");
		
		setTimeout(function() {
			popup.classList.add("show");
		
		}, 50);

		setTimeout(function() {
			popup.classList.remove("show");
		}, 5000);
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
//     CAROUSEL
// ================

const radioInputs = document.querySelectorAll(".radio-input");
const carouselItems = document.querySelectorAll(".carousel-item");
const radioLabels = document.querySelectorAll(".radio-label");
let currentIndex = 0;

function showItem(index) {
	carouselItems[currentIndex].classList.remove("active");
	radioLabels[currentIndex].classList.remove("active");
	currentIndex = index;
	carouselItems[currentIndex].classList.add("active");
	radioLabels[currentIndex].classList.add("active");
	radioInputs[currentIndex].checked = true;
}

function nextItem() {
	let newIndex = currentIndex + 1;
	if(newIndex >= carouselItems.length) {
		newIndex = 0;
	}
	showItem(newIndex);
}

let intervalId = setInterval(nextItem, 10000);
radioLabels.forEach((label, index) => {
	label.addEventListener("click", () => {
		showItem(index);
		clearInterval(intervalId);
		intervalId = setInterval(nextItem, 10000);
	});
	label.setAttribute('for', `radio-${index + 1}`);
});

radioInputs.forEach((input, index) => {
	input.setAttribute('id', `radio-${index + 1}`);
});