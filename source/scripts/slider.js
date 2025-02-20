const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('.slider__item');
const controlButtons = slider.querySelectorAll('.slider__dots');
const prevButton = slider.querySelector('.slider-button-prev');
const nextButton = slider.querySelector('.slider-button-next');

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

const btnDisabled = () => {
  let fl;
  if (currentSlide === 0) {
    fl = true;
    console.log('начало');
    prevButton.disabled = fl;
    return;
  }
  if (currentSlide === slideCount - 1) {
    fl = true;
    console.log('конец');
    nextButton.disabled = fl;
    return;
  }
  else {
    fl = false;
    console.log('середина');
    nextButton.disabled = fl;
    prevButton.disabled = fl;
    return;
  }
}

controlButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (index < slideCount) {
      currentSlide = index;
      updateSlider();
      btnDisabled();
    }
  })
})

prevButton.addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlider();
    btnDisabled();
  }
})

nextButton.addEventListener('click', () => {
  if (currentSlide < slideCount - 1) {
    currentSlide++;
    updateSlider();
    btnDisabled();
  }
})

window.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowLeft' && currentSlide > 0) {
    currentSlide--;
    updateSlider();
    btnDisabled()
  } else
    if (event.key === 'ArrowRight' && currentSlide < slideCount - 1) {
      currentSlide++;
      updateSlider();
      btnDisabled()
    }
})
