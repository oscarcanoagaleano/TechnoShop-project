//Hamburger menu Function
function hamburger() {
	var menu = document.getElementById("menu-links");
	var logo = document.getElementById("ffc-logo");
	if (menu.style.display === "flex" && logo.style.display === "none") {
		menu.style.display = "none";
		logo.style.display = "flex";
	}
	else {
		menu.style.display = "flex";
		logo.style.display = "none";
	}
}

//Slide Show
let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function startSlideshow() {
    setInterval(() => {
        plusSlides(1);
    }, 5000);
}
startSlideshow();