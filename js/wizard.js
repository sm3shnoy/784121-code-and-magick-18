'use strict';

(function () {
  // Отображаем в диалоговом окне собранных магов
  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  // Элементы на странице для отображения магов
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');

  // Создаем фрагмент для вставки на страницу
  var successHandler = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < 4; i++) {
      fragment.appendChild(renderWizard(wizards[window.util.randomNumber(wizards.length)]));
    }
    similarListElement.appendChild(fragment);

    // Показываем диалоговое окно с магами
    document.querySelector('.setup-similar').classList.remove('hidden');
  };

  var errorHandler = function (errorMessage) {
    var errorMsg = document.createElement('div');

    errorMsg.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    errorMsg.style.position = 'absolute';
    errorMsg.style.left = 0;
    errorMsg.style.right = 0;
    errorMsg.style.fontSize = '30px';

    errorMsg.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', errorMsg);
  };

  window.backend.load(successHandler, errorHandler);

})();
