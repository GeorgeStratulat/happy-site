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
var menuIsOpen = 0;
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("navigation").style.marginLeft = "250px";
    // document.body.style.backgroundColor = "rgba(0,0,0,0.8)";
    document.getElementById("btn-menu").classList.add("change");
    var logoBrand = document.getElementsByClassName("logo-brand");
    logoBrand[0].style.color = "white";
    logoBrand[1].style.opacity = "0";
    document.getElementById("overlay-dark").style.display = "initial";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    // document.body.style.backgroundColor = "white";
    document.getElementById("navigation").style.marginLeft = "0";
    document.getElementById("btn-menu").classList.remove("change");
    var logoBrand = document.getElementsByClassName("logo-brand");
    logoBrand[0].style.color = "black";
    logoBrand[1].style.opacity = "1";
    document.getElementById("overlay-dark").style.display = "none";

}

var typed = new Typed('.typed', {
    strings: ["developing.", "photography.", "coffee."],
    typeSpeed: 50,
    loop: true
});

