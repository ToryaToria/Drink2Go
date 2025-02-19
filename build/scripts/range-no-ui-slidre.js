// source/scripts/range-no-ui-slidre.js
var sliderElement = document.querySelector(".range__ui-slider");
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
//# sourceMappingURL=range-no-ui-slidre.js.map
