// =====================
//        LOADING
// =====================

var timeLimit = 5000;
window.addEventListener("load", function() {
	window.location.href = "../HTML/Index.html";
});

var errorTimer = setTimeout(function() {
	document.getElementById("loading").style.display = "none";
	document.getElementById("error-message").style.display = "block";
}, timeLimit);