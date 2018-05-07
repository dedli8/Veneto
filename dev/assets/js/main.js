// countdown init

const myCountdown = new countdown({
    target: '.countdown',
    dayWord: ' день',
    hourWord: ' час',
    minWord: ' минут',
    secWord: ' сек'
});

const myCountdown2 = new countdown({
    target: '.countdown2',
    dayWord: ' день',
    hourWord: ' час',
    minWord: ' минут',
    secWord: ' сек'
});
const myCountdown3 = new countdown({
    target: '.countdown3',
    dayWord: ' день',
    hourWord: ' час',
    minWord: ' минут',
    secWord: ' сек'
});
const myCountdown4 = new countdown({
    target: '.countdown4',
    dayWord: ' день',
    hourWord: ' час',
    minWord: ' минут',
    secWord: ' сек'
});


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

// banner init
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
