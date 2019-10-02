'use strict';

// Переменные для генерации мага
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нинонго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

// Количество магов, которое нужно отобразить
var COUNTER_WIZARDS = 4;

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
// document.querySelector('.setup-similar').classList.remove('hidden');

// Код клавиш
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

// Показываем / скрываем окно редактирования персонажа
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

var popupEscKeydownHandler = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', popupEscKeydownHandler);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', popupEscKeydownHandler);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

// Поле для ввода имени
var userNameInput = document.querySelector('.setup-user-name');

userNameInput.addEventListener('keydown', function (evt) {
  evt.stopPropagation();
});

/* Цвет мантии */
var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = COAT_COLORS[randomNumber(COAT_COLORS.length)];
});

/* Цвет глаз */
var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = EYES_COLORS[randomNumber(EYES_COLORS.length)];
});

/* Цвет фаербола */
var fierballColor = document.querySelector('.setup-fireball-wrap');
var fierballInputColor = document.querySelector('.setup-fireball-wrap input');

fierballColor.addEventListener('click', function () {
  fierballColor.style.background = FIREBALL_COLORS[randomNumber(FIREBALL_COLORS.length)];
  fierballInputColor.value = fierballColor.style.background;
});
