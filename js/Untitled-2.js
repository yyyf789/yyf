  document.addEventListener('DOMContentLoaded', function() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => {
    const slides = cell.querySelectorAll('.slide');
    let currentSlide = 0;
    const interval = setInterval(() => {
      
      slides[currentSlide].classList.remove('active');
      
      currentSlide = (currentSlide + 1) % slides.length;
      
      slides[currentSlide].classList.add('active');
    }, 1500); 

    
    slides[currentSlide].classList.add('active');
  });
});