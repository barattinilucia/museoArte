$(".menuhamburguesa").on("click", function() {
  $("nav").toggleClass("menuinvisible");
});

const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(slideIndex) {
   if (slideIndex < 0) {
      slideIndex = slides.length - 1;
   }

   if (slideIndex >= slides.length) {
      slideIndex = 0;
   }

   for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
   }

   slides[slideIndex].style.display ='block';

   currentSlide = slideIndex;
}

showSlide(currentSlide);

document.getElementById('prevButton').addEventListener('click', function() {
   showSlide(currentSlide - 1);
});

document.getElementById('nextButton').addEventListener('click', function() {
   showSlide(currentSlide + 1);
});
