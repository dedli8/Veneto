// change bg of arrows in advantages section

(function () {
    var arrows = document.querySelectorAll(".arrow-box");
    for (i = 0; i < arrows.length; i++) {
        arrows[i].addEventListener("click", arrowsChangeBg);
    }
})();

function arrowsChangeBg() {
    var blueClass = document.getElementsByClassName("advantages-active-blue");
    var blackClass = document.getElementsByClassName("advantages-active-black");
    blueClass[0].className = blueClass[0].className.replace(" advantages-active-blue", "");
    blackClass[0].className = blackClass[0].className.replace(" advantages-active-black", "");
    this.querySelector(".arrow-box-black").className += " advantages-active-blue";
    this.querySelector(".arrow-box-blue").className += " advantages-active-black";
}

// add active class to the current button (highlight it)

var btns = document.getElementsByClassName("nav-item");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("nav-active");
        current[0].className = current[0].className.replace(" nav-active", "");
        this.className += " nav-active";
    });
}

// owl carousel initialize

$('.owl-carousel').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 2,
            center: true
        },
        640: {
            items: 2,
            center: true
        },
        900: {
            items: 3,
            center: true
        },
        1170: {
            items: 4
        }
    }
});

// delete text in buttons in owl carousel

$(".owl-prev").html("");
$(".owl-next").html("");

// change img in second slider

(function () {
    var item = document.querySelectorAll('.footerslider-item');
    for (var i = 0; i < item.length; i++) {
        item[i].addEventListener("mouseover", setWhiteImg);
        item[i].addEventListener("mouseout", setGrayImg);
    }
})();

function setWhiteImg() {
    var targetSrc = this.querySelector('img').src;
    var newSrc = targetSrc.slice(0, -4);
    newSrc += "w.png";
    this.querySelector('img').src = newSrc;
}

function setGrayImg() {
    var targetSrc = this.querySelector('img').src;
    var newSrc = targetSrc.slice(0, -5);
    newSrc += ".png";
    this.querySelector('img').src = newSrc;
}

// top window button

document.querySelector("footer > .case-icon-square").addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});