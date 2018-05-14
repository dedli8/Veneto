// countdown init script

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

// countdown init script ends

// banner script starts

// banner autoplay script starts
(function () {
    function Slideshow(element) {
        this.el = document.querySelector(element);
        this.init();
    }

    Slideshow.prototype = {
        init: function () {
            this.slides = this.el.querySelectorAll(".mySlides");
            this.index = 0;
            this.timer = null;
            this.action();
            this.stopStart();
        },
        _slideTo: function (slide) {
            var currentSlide = this.slides[slide];
            currentSlide.style.display = "block";
            for (var i = 0; i < this.slides.length; i++) {
                var slide = this.slides[i];
                if (slide !== currentSlide) {
                    slide.style.display = "none";
                }
            }
        },
        action: function () {
            var self = this;
            self.timer = setInterval(function () {
                self.index++;
                if (self.index == self.slides.length) {
                    self.index = 0;
                }
                self._slideTo(self.index);

            }, 3000);
        },
        stopStart: function () {
            var self = this;
            self.el.addEventListener("mouseover", function () {
                clearInterval(self.timer);
                self.timer = null;

            }, false);
            self.el.addEventListener("mouseout", function () {
                self.action();

            }, false);
        }

    };

    document.addEventListener("DOMContentLoaded", function () {

        var banner = new Slideshow(".banner");

    });

})();

// banner autoplay script ends

// banner buttons prev and next script

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slidesItem = document.getElementsByClassName("mySlides");
    if (n > slidesItem.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slidesItem.length
    }
    for (i = 0; i < slidesItem.length; i++) {
        slidesItem[i].style.display = "none";
    }
    slidesItem[slideIndex - 1].style.display = "block";
}
// banner buttons script ends

// banner script ends

// dropdown menu script starts

const stockCounter = document.getElementsByClassName("section-stock-counterdown")[0];
const menuItem = document.getElementsByClassName("goods-menu-item");
const dropdownMenuArea = document.getElementsByClassName("section-stock-counterdown")[0];
const header = document.getElementsByClassName("header")[0];
for (let i = 0; menuItem.length > i; i++) {
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

// dropdown menu script ends


// btn to top script starts

// When the user scrolls down 20px from the top of the document, show the button
const btnToTop = document.getElementById("btn-to-top");
window.onscroll = function () {
    scrollFunction()
};

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

// btn to top script ends