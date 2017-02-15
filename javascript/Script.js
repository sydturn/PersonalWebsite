var slideIndex = 1;
showSlides(slideIndex);

var slideIndex2 = 1;
console.log(slideIndex2);
showSlides2(slideIndex2);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
function plusSlides2(n) {
  if(isNaN(slideIndex2)) {
      slideIndex2 = 1;
  }
  showSlides2(slideIndex2 += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
      slideIndex = 1
  } 
  if (n < 1) {
      slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides2");
  var dots = document.getElementsByClassName("dot2");
  if (n > slides.length) {
      slideIndex2 = 1
  } 
  if (n < 1) {
      slideIndex2 = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex2-1].style.display = "block"; 
  dots[slideIndex2-1].className += " active";
}

function showDiv(itemShow, itemHide) {
    var show = document.getElementById(itemShow);
    var hide = document.getElementById(itemHide);
    var hidePara = document.getElementById("artPara");
    show.style.display = show.style.display == "none" ? "block" : "none";
    hide.style.display = show.style.display == "block" ? "none" : "none";
    hidePara.style.display = show.style.display == "block" ? "none" : "block";
}