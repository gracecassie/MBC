// JavaScript - script.js

const carousel = document.querySelector('.carousel');
const slides = carousel.querySelectorAll('.slide');

let currentIndex = 0;

function showSlide(index) {
  if (index < 0) {
    index = slides.length - 1;
  } else if (index >= slides.length) {
    index = 0;
  }

  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.transform = 'translateX(0)';
    } else {
      slide.style.transform = 'translateX(100%)';
    }
  });

  currentIndex = index;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

// Automatic slide transition
setInterval(nextSlide, 5000);

showSlide(currentIndex);
