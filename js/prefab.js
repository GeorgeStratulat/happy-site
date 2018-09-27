
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $(".navbar").addClass("bg-darkis");
    } else {
        $(".navbar").removeClass("bg-darkis");
    }
});