'use strict';

(function () {
  // Собираем мага
  var wizardGenerator = function () {
    var wizards = [];

    for (var i = 0; i < window.setup.COUNTER_WIZARDS; i++) {
      wizards[i] = {
        name: window.setup.WIZARD_NAMES[window.util.randomNumber(window.setup.WIZARD_NAMES.length)] + ' ' + window.setup.WIZARD_SURNAMES[window.util.randomNumber(window.setup.WIZARD_SURNAMES.length)],
        coatColor: window.setup.COAT_COLORS[window.util.randomNumber(window.setup.COAT_COLORS.length)],
        eyesColor: window.setup.EYES_COLORS[window.util.randomNumber(window.setup.EYES_COLORS.length)]
      };
    }

    return wizards;
  };

  // Все собранные маги
  var wizards = wizardGenerator();

  // Отображаем в диалоговом окне собранных магов
  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  // Элементы на странице для отображения магов
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');

  // Создаем фрагмент для вставки на страницу
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);

  // Показываем диалоговое окно с магами
  document.querySelector('.setup-similar').classList.remove('hidden');
})();
