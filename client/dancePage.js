var slideIndex = 0; 
$(document).ready(function() {
     carousel(); 
});
var carousel = function() {
    console.log("hi")
    var i;
    var x = document.getElementsByClassName("danceSlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 2000); // Change image every 2 seconds

}
