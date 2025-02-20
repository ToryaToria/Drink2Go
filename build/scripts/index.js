// source/scripts/mobil-menu.js
var btnMob = document.querySelector(".hamburger");
var menuMob = document.querySelector("#nav__list");
var onClickBtn = () => {
  btnMob.classList.toggle("hamburger--closer");
  menuMob.classList.toggle("hidden");
  console.log("\u043A\u0443");
};
btnMob.addEventListener("click", onClickBtn);

// source/scripts/range-no-ui-slidre.js
var sliderElement = document.querySelector(".range__ui-slider");
var wrappField = document.querySelector(".range__wrapp-field");
var formatValues = [
  document.getElementById("min-price"),
  document.getElementById("max-price")
];
var valueElemMin = document.querySelector("#min-price");
var valueElemMax = document.querySelector("#max-price");
noUiSlider.create(sliderElement, {
  start: [0, 900],
  range: {
    min: 0,
    max: 1060
  },
  connect: [false, true, false],
  format: {
    from: (value) => {
      return Number(value).toFixed(0);
    },
    to: (value) => {
      return Number(value).toFixed(0);
    }
  }
});
sliderElement.noUiSlider.on("update", function(values, handle) {
  formatValues[handle].value = values[handle];
});
formatValues.forEach((button) => {
  button.addEventListener("input", () => {
    console.log(button.id);
    if (button.id === "min-price") {
      sliderElement.noUiSlider.set([button.value, null]);
      console.log(button.id);
    }
    if (button.id === "max-price") {
      sliderElement.noUiSlider.set([null, button.value]);
      console.log(button.id);
    }
  });
});

// source/scripts/slider.js
var slider = document.querySelector(".slider");
var slides = slider.querySelectorAll(".slider__item");
var controlButtons = slider.querySelectorAll(".slider__dots");
var prevButton = slider.querySelector(".slider__btn--prev");
var nextButton = slider.querySelector(".slider__btn--next");
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
controlButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (index < slideCount) {
      currentSlide = index;
      updateSlider();
    }
  });
});
prevButton.addEventListener("click", () => {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlider();
  }
});
nextButton.addEventListener("click", () => {
  if (currentSlide < slideCount - 1) {
    currentSlide++;
    updateSlider();
  }
});
window.addEventListener("keydown", function(event) {
  if (event.key === "ArrowLeft" && currentSlide > 0) {
    currentSlide--;
    updateSlider();
  } else if (event.key === "ArrowRight" && currentSlide < slideCount - 1) {
    currentSlide++;
    updateSlider();
  }
});
//# sourceMappingURL=index.js.map
