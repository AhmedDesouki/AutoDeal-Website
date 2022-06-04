/*911 Specs*/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n >slides.length) {slideIndex = 1}    
  if (n <1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}
function playGIF(elm) {
    elm.src = '911.gif';
    elm.removeAttribute('onmouseover');
}
function stopGIF(elm) {
    elm.src='911rev.jpg';
}

function play1GIF(elm) {
    elm.src = '718.gif';
    elm.removeAttribute('onmouseover');
}
function stop1GIF(elm) {
    elm.src='718rev.jpg';
}
function play2GIF(elm) {
    elm.src = 'macan.gif';
    elm.removeAttribute('onmouseover');
}
function stop2GIF(elm) {
    elm.src='macanrev.jpg';
}
/*911 Specs*/
/*Feedback*/
function sendFunction() {
  confirm("you have already send your feedback");
}
/*Feedback*/
/*Our Team*/     
function visitpage(){
    var yesorno;
        if(confirm("Are you sure you want to leave this page?"))
         {
        yesorno = location.replace("feedback.html");
         }
}
/*Our Team*/
/*Aftersales Support*/
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
/*Aftersales Support*/