/*var text = ["Photographer.", "Builder.", "Gamer.", "Developer."];
var counter = 0;
var elem = $("#profile");
setInterval(change, 2000);
function change() {
    elem.fadeOut(function(){
        elem.html(text[counter]);
        counter++;
        if(counter >= text.length) { counter = 0; }
        elem.fadeIn();
    });
}*/





$(document).ready(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
            if($('.overlay:visible').length == 0) {
                $("#navi").css("background-color", "#0A2C47");
                $(".navbar-brand-onscroll").css("display","flex");
                $(".navbar-brand").css("display","none");
                $(".nav-link").css("color","#E6DAC7");
                $(".navbar-toggler").css("color","#E6DAC7");
            }
        } else {
            $("#navi").css("background-color", "#E6DAC7");
            $(".navbar-brand-onscroll").css("display","none");
            $(".navbar-brand").css("display","flex");
            $(".nav-link").css("color","#0A2C47");
            $(".navbar-toggler").css("color","#0A2C47");
        }
    });


    var typed = new Typed(".typing", {
        strings: ["Developer.", "Builder.", "Photographer.", "Freelancer.", "Entrepreneur."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


});



