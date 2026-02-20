// source/scripts/range-no-ui-slidre.js
var sliderElement = document.querySelector(".range__ui-slider");
var formatValues = [
  document.getElementById("min-price"),
  document.getElementById("max-price")
];
noUiSlider.create(sliderElement, {
  start: [0, 900],
  range: {
    min: 0,
    max: 1060
  },
  connect: [false, true, false],
  format: {
    from: (value) => Number(value).toFixed(0),
    to: (value) => Number(value).toFixed(0)
  }
});
sliderElement.noUiSlider.on("update", function(values, handle) {
  formatValues[handle].value = values[handle];
});
formatValues.forEach((button) => {
  button.addEventListener("input", () => {
    if (button.id === "min-price") {
      sliderElement.noUiSlider.set([button.value, null]);
    }
    if (button.id === "max-price") {
      sliderElement.noUiSlider.set([null, button.value]);
    }
  });
});
//# sourceMappingURL=range-no-ui-slidre.js.map
