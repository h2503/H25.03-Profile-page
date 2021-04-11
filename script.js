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


  $(".rotate").click(function(){
      $(this).toggleClass("down")  ; 
  })


  $(".gallery").magnificPopup({
      delegate: 'a',
      type: 'image',
      gallery:{
        enabled: true
      }
    });

  $(".checkResume").magnificPopup({
      delegate: 'a',
      type: 'image',
      gallery:{
        enabled: true
      }
    });
  



/*
filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}
// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}
// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}
// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
*/