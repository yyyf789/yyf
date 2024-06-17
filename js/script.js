let slideIndex2 = 1;
let slideIndex3 = 1;

showSlides(slideIndex1, 'slider1');
showSlides(slideIndex2, 'slider2');
showSlides(slideIndex3, 'slider3');

function changeSlide(n, sliderId) {
  if (sliderId === 'slider1') {
    showSlides(slideIndex1 += n, 'slider1');
  } else if (sliderId === 'slider2') {
    showSlides(slideIndex2 += n, 'slider2');
  } else if (sliderId === 'slider3') {
    showSlides(slideIndex3 += n, 'slider3');
  }
}

function showSlides(n, sliderId) {
  let i;
  let slides = document.querySelectorAll(`#${sliderId} .slide`);
  if (n > slides.length) {n = 1}    
  if (n < 1) {n = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[n-1].style.display = "block";  
