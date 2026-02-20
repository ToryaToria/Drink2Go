// source/scripts/slider.js
var slider = document.querySelector(".slider");
var slides = slider.querySelectorAll(".slider__item");
var controlButtons = slider.querySelectorAll(".slider__dots");
var prevButton = slider.querySelector(".slider-button-prev");
var nextButton = slider.querySelector(".slider-button-next");
var currentSlide = 0;
var slideCount = slides.length;
var activeSlides = "slider__item--current";
var activeButton = "slider__dots--current";
var updateSlider = () => {
  controlButtons.forEach((button, index) => {
    if (index === currentSlide) {
      button.classList.add(activeButton);
      slides[index].classList.add(activeSlides);
    } else {
      button.classList.remove(activeButton);
      slides[index].classList.remove(activeSlides);
    }
  });
};
var btnDisabled = () => {
  let fl;
  if (currentSlide === 0) {
    fl = true;
    prevButton.disabled = fl;
    return;
  }
  if (currentSlide === slideCount - 1) {
    fl = true;
    nextButton.disabled = fl;
    return;
  } else {
    fl = false;
    nextButton.disabled = fl;
    prevButton.disabled = fl;
    return;
  }
};
controlButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (index < slideCount) {
      currentSlide = index;
      updateSlider();
      btnDisabled();
    }
  });
});
prevButton.addEventListener("click", () => {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlider();
    btnDisabled();
  }
});
nextButton.addEventListener("click", () => {
  if (currentSlide < slideCount - 1) {
    currentSlide++;
    updateSlider();
    btnDisabled();
  }
});
window.addEventListener("keydown", function(event) {
  if (event.key === "ArrowLeft" && currentSlide > 0) {
    currentSlide--;
    updateSlider();
    btnDisabled();
  } else if (event.key === "ArrowRight" && currentSlide < slideCount - 1) {
    currentSlide++;
    updateSlider();
    btnDisabled();
  }
});
//# sourceMappingURL=slider.js.map
