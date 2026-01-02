const sliderElement = document.querySelector('.range__ui-slider');

// const wrappField = document.querySelector('.range__wrapp-field')

const formatValues = [
  document.getElementById('min-price'),
  document.getElementById('max-price'),
];
// const valueElemMin = document.querySelector('#min-price');
// const valueElemMax = document.querySelector('#max-price');

noUiSlider.create(sliderElement, {
  start: [0, 900],
  range: {
    min: 0,
    max: 1060,
  },
  connect: [false, true, false],

  format: {
    from: (value) => Number(value).toFixed(0),
    to: (value) => Number(value).toFixed(0)
  }
});

sliderElement.noUiSlider.on('update', function (values, handle) {
  formatValues[handle].value = values[handle];
});

formatValues.forEach((button) => {
  button.addEventListener('input', () => {
    // console.log(button.id);
    if (button.id === 'min-price') {
      sliderElement.noUiSlider.set([button.value, null]);
      // console.log(button.id);
    }
    if (button.id === 'max-price') {
      sliderElement.noUiSlider.set([null, button.value]);
      // console.log(button.id);
    }
  });
});
