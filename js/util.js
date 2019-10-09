'use strict';

(function () {
  // Код клавиш
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  window.util = {
    isEscEvent: function (evt, action) {
      if (evt.keyCode === ESC_KEYCODE) {
        action();
      }
    },
    isEnterEvent: function (evt, action) {
      if (evt.keyCode === ENTER_KEYCODE) {
        action();
      }
    },
    // Генерируем случайное число для создания объектов магов
    randomNumber: function (max) {
      return Math.floor(Math.random() * max);
    }
  };
})();
