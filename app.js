function openModal() {
    document.querySelector(".modal").style = "display: block";
}

function closeModal() {
    document.querySelector(".modal").style = "display: none";
}

function showSlides(n) {
    let i;
    const slides = document.querySelectorAll(".slides");
    const demos = document.querySelectorAll(".demo");
    const caption = document.querySelector(".caption");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < demos.length; i++) {
        demos[i].className = demos[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";
    demos[slideIndex-1].className += " active";
    caption.innerHTML = demos[slideIndex-1].alt;
}

function plusSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlides(n) {
    showSlides(slideIndex = n);
}

let slideIndex = 1;
showSlides(slideIndex);