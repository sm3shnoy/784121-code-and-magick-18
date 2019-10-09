'use strict';

(function () {
  // Показываем / скрываем окно редактирования персонажа
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');

  var popupEscKeydownHandler = function (evt) {
    window.util.isEscEvent(evt, closePopupClickHandler);
  };

  setupOpen.addEventListener('click', function () {
    openPopupClickHandler();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopupClickHandler);
  });

  setupClose.addEventListener('click', function () {
    closePopupClickHandler();
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopupClickHandler);
  });

  var openPopupClickHandler = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', popupEscKeydownHandler);
  };

  var closePopupClickHandler = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', popupEscKeydownHandler);
  };

  /* Перетаскиваем диалоговое окно */
  // var dialogHandle = setup.querySelector('.upload');
})();
