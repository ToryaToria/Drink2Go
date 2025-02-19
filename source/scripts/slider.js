const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('.slider__item');
const controlButtons = slider.querySelectorAll('.slider__dots');
const prevButton = slider.querySelector('.slider__btn--prev');
const nextButton = slider.querySelector('.slider__btn--next');

let currentSlide = 0;
const slideCount = slides.length;

const activeSlides = 'slider__item--current';
const activeButton = 'slider__dots--current';

const updateSlider = () => {
  controlButtons.forEach((button, index) => {
    if (index === currentSlide) {
      button.classList.add(activeButton);
      slides[index].classList.add(activeSlides)
    } else {
      button.classList.remove(activeButton)
      slides[index].classList.remove(activeSlides)
    }
  })
}

controlButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (index < slideCount) {
      currentSlide = index;
      updateSlider();
    }
  })
})


prevButton.addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlider();
  }
})

nextButton.addEventListener('click', () => {
  if (currentSlide < slideCount - 1) {
    currentSlide++;
    updateSlider();
  }
})

window.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowLeft' && currentSlide > 0) {
    currentSlide--;
    updateSlider();
  } else if (event.key === 'ArrowRight' && currentSlide < slideCount - 1) {
    currentSlide++;
    updateSlider();
  }
})

console.log('hi');