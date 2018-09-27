// Template: BOOZE. - Template HTML5 / CSS3
// Author: alexiancu.com
// Version: 1.0.0
// Design and Developed by: Alex Iancu - Web & App Developer

// NOTE:  


$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $("#navigation").addClass("bg-darkis");
    } else {
        $("#navigation").removeClass("bg-darkis");
    }
});