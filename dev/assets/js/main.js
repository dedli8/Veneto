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

const stockCounter = document.getElementsByClassName("section-stock-counterdown")[0];
const menuItem = document.getElementsByClassName("goods-menu-item");
const dropdownMenuArea = document.getElementsByClassName("section-stock-counterdown")[0];
const header = document.getElementsByClassName("header")[0];
for (let i = 0; menuItem.length>i; i++) {
    menuItem[i].addEventListener("mouseover", displayDropdownArea);
    menuItem[i].addEventListener("mouseout", displayNoneDropdownArea);
}
stockCounter.addEventListener("mouseover", stockCounterBlock);
stockCounter.addEventListener("mouseout", stockCounterNone);

function displayDropdownArea(event) {
    dropdownMenuArea.style.display = "block";
    header.style.borderBottom = "1px solid #0075be";
}
function displayNoneDropdownArea(event) {
    dropdownMenuArea.style.display = "none";
    header.style.borderBottom = "none";
}
function stockCounterBlock() {
    stockCounter.style.display = "block";
}
function stockCounterNone() {
    stockCounter.style.display = "none";
}


// When the user scrolls down 20px from the top of the document, show the button
const btnToTop = document.getElementById("btn-to-top")
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnToTop.style.display = "block";
    } else {
        btnToTop.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
btnToTop.addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});