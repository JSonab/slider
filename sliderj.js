  let currentSlide = 1;
  const totalSlides = 3;

  function showSlide(slideIndex) {
    const slides = document.querySelectorAll('.big-image');

    slides.forEach(slide => slide.classList.remove('active'));
    slides[slideIndex - 1].classList.add('active');
    currentSlide = slideIndex;

  }

  function prevSlide() {
    currentSlide = currentSlide === 1 ? totalSlides : currentSlide - 1;
    showSlide(currentSlide);
  }

  function nextSlide() {
    currentSlide = currentSlide === totalSlides ? 1 : currentSlide + 1;
    showSlide(currentSlide);
  }







