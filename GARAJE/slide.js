let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  
  currentSlide = (index + slides.length) % slides.length;
  
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

document.querySelector('.next').addEventListener('click', () => {
  showSlide(currentSlide + 1);
});

document.querySelector('.prev').addEventListener('click', () => {
  showSlide(currentSlide - 1);
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => showSlide(index));
});

// Auto-play opcional (cada 5 segundos)
setInterval(() => {
  showSlide(currentSlide + 1);
}, 3000);