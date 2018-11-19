// Template: BOOZE. - Template HTML5 / CSS3
// Author: alexiancu.com
// Version: 1.0.0
// Design and Developed by: Alex Iancu - Web & App Developer

// NOTE:  

// CAROUSEL ANIMTATION

(function ($) {
    //Function to animate slider captions
    function doAnimations(elems) {
        //Cache the animationend event in a variable
        var animEndEv = "webkitAnimationEnd animationend";

        elems.each(function () {
            var $this = $(this),
                $animationType = $this.data("animation");
            $this.addClass($animationType).one(animEndEv, function () {
                $this.removeClass($animationType);
            });
        });
    }

    //Variables on page load
    var $myCarousel = $("#carouselExampleIndicators"),
        $firstAnimatingElems = $myCarousel
            .find(".carousel-item:first")
            .find("[data-animation ^= 'animated']");

    //Initialize carousel
    $myCarousel.carousel();

    //Animate captions in first slide on page load
    doAnimations($firstAnimatingElems);

    //Other slides to be animated on carousel slide event
    $myCarousel.on("slide.bs.carousel", function (e) {
        var $animatingElems = $(e.relatedTarget).find(
            "[data-animation ^= 'animated']"
        );
        doAnimations($animatingElems);
    });
})(jQuery);

// // COUNT


// $('.timer').countTo();


// // MIX

// var containerEl = document.querySelector('.projects');
// var mixer = mixitup(containerEl);

// NAVIGATION PANEL OPEN Function

var menuIsOpen = 0;
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
    document.getElementById("navigation").style.marginRight = "250px";
    // document.body.style.backgroundColor = "rgba(0,0,0,0.8)";
    document.getElementById("btn-menu").classList.add("change");
    var logoBrand = document.getElementsByClassName("logo-brand");
    logoBrand[0].style.color = "white";
    logoBrand[1].style.opacity = "0";
    document.getElementById("overlay-dark").style.display = "initial";
}

// NAVIGATION PANEL CLOSE Function

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
    // document.body.style.backgroundColor = "white";
    document.getElementById("navigation").style.marginRight = "0";
    document.getElementById("btn-menu").classList.remove("change");
    var logoBrand = document.getElementsByClassName("logo-brand");
    logoBrand[0].style.color = "black";
    logoBrand[1].style.opacity = "1";
    document.getElementById("overlay-dark").style.display = "none";

}
// SETTING UP FOR TYPED.JS
var typed = new Typed('.typed', {
    strings: ["Dimineti cu aroma de cafea", "Cocktailuri.. ", "Distractie.."],
    typeSpeed: 70,
    loop: true
});

