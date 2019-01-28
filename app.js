const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot")
let slideIndex = 0;

showSlide(slideIndex);

function nextSlide(ns) {
    showSlide(slideIndex+=ns);
}

function curentSlide(ns) {
    slideIndex = ns;
    showSlide(slideIndex);   
}

function showSlide(ns) {
    if (ns > slides.length) {
        slideIndex = 1;
    }

    if (ns < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display= "block";
    dots[slideIndex-1].className += " active";

    console.log(slideIndex)
}