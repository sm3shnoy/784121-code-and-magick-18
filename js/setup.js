'use strict';

// Переменные для генерации мага
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нинонго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

// Количество магов, которое нужно отобразить
var COUNTER_WIZARDS = 4;

// Показываем диалоговое окно с магами
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

// Элементы на странице для отображения магов
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');


// Генерируем случайное число для создания объектов магов
var randomNumber = function (max) {
  return Math.floor(Math.random() * max);
};

// Собираем мага
var wizardGenerator = function () {
  var wizards = [];

  for (var i = 0; i < COUNTER_WIZARDS; i++) {
    wizards[i] = {
      name: WIZARD_NAMES[randomNumber(WIZARD_NAMES.length)] + ' ' + WIZARD_SURNAMES[randomNumber(WIZARD_SURNAMES.length)],
      coatColor: COAT_COLORS[randomNumber(COAT_COLORS.length)],
      eyesColor: EYES_COLORS[randomNumber(EYES_COLORS.length)]
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

// Создаем фрагмент для вставки на страницу
var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

// Показываем диалоговое окно с магами
document.querySelector('.setup-similar').classList.remove('hidden');
