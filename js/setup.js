'use strict';

(function () {
  window.setup = {
    // Переменные для генерации мага
    WIZARD_NAMES: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
    WIZARD_SURNAMES: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нинонго', 'Ирвинг'],
    // Количество магов, которое нужно отобразить
    COUNTER_WIZARDS: 4,
    COAT_COLORS: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    EYES_COLORS: ['black', 'red', 'blue', 'yellow', 'green'],
    FIREBALL_COLORS: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
  };

  // Поле для ввода имени
  var userNameInput = document.querySelector('.setup-user-name');

  userNameInput.addEventListener('keydown', function (evt) {
    evt.stopPropagation();
  });

  /* Цвет мантии */
  var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');

  window.colorize(wizardCoat, window.setup.COAT_COLORS);

  /* Цвет глаз */
  var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');

  window.colorize(wizardEyes, window.setup.EYES_COLORS);

  /* Цвет фаербола */
  var fireballColor = document.querySelector('.setup-fireball-wrap');
  var fireballInputColor = document.querySelector('.setup-fireball-wrap input');

  fireballColor.addEventListener('click', function () {
    var color = window.setup.FIREBALL_COLORS[window.util.randomNumber(window.setup.FIREBALL_COLORS.length)];

    fireballColor.style.background = color;
    fireballInputColor.value = color;
  });

})();
