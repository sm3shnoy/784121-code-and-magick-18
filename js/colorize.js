'use strict';

(function () {
  window.colorize = function (element, colorList) {
    element.addEventListener('click', function () {
      var color = colorList[window.util.randomNumber(colorList.length)];

      if (element.tagName.toLowerCase() === 'div') {
        element.style.backgroundColor = color;
      } else {
        element.style.fill = color;
      }
    });
  };
})();
