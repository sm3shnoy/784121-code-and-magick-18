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
    setup.style = '';
    document.removeEventListener('keydown', popupEscKeydownHandler);
  };

  /* Перетаскиваем диалоговое окно */
  var dialogHandler = setup.querySelector('.upload');

  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setup.style.top = (setup.offsetTop - shift.y) + 'px';
      setup.style.left = (setup.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var preventDefaultClickHander = function (evtDef) {
          evtDef.preventDefault();
          dialogHandler.removeEventListener('click', preventDefaultClickHander);
        };
        dialogHandler.addEventListener('click', preventDefaultClickHander);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
