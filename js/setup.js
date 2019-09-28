'use strict';

var WIZARD_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var WIZARD_LAST_NAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];
var WIZARD_COATS_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var WIZARD_EYES_COLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;

  return wizardElement;
};

var random = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

var wizards = [
  {
    name: WIZARD_NAMES[random(0, 8)] + ' ' + WIZARD_LAST_NAMES[random(0, 8)],
    coatColor: WIZARD_COATS_COLORS[random(0, 5)],
    eyesColor: WIZARD_EYES_COLORS[random(0, 4)]
  },
  {
    name: WIZARD_NAMES[random(0, 8)] + ' ' + WIZARD_LAST_NAMES[random(0, 8)],
    coatColor: WIZARD_COATS_COLORS[random(0, 5)],
    eyesColor: WIZARD_EYES_COLORS[random(0, 4)]
  },
  {
    name: WIZARD_NAMES[random(0, 8)] + ' ' + WIZARD_LAST_NAMES[random(0, 8)],
    coatColor: WIZARD_COATS_COLORS[random(0, 5)],
    eyesColor: WIZARD_EYES_COLORS[random(0, 4)]
  },
  {
    name: WIZARD_NAMES[random(0, 8)] + ' ' + WIZARD_LAST_NAMES[random(0, 8)],
    coatColor: WIZARD_COATS_COLORS[random(0, 5)],
    eyesColor: WIZARD_EYES_COLORS[random(0, 4)]
  },
  {
    name: WIZARD_NAMES[random(0, 8)] + ' ' + WIZARD_LAST_NAMES[random(0, 8)],
    coatColor: WIZARD_COATS_COLORS[random(0, 5)],
    eyesColor: WIZARD_EYES_COLORS[random(0, 4)]
  },
  {
    name: WIZARD_NAMES[random(0, 8)] + ' ' + WIZARD_LAST_NAMES[random(0, 8)],
    coatColor: WIZARD_COATS_COLORS[random(0, 5)],
    eyesColor: WIZARD_EYES_COLORS[random(0, 4)]
  },
  {
    name: WIZARD_NAMES[random(0, 8)] + ' ' + WIZARD_LAST_NAMES[random(0, 8)],
    coatColor: WIZARD_COATS_COLORS[random(0, 5)],
    eyesColor: WIZARD_EYES_COLORS[random(0, 4)]
  },
  {
    name: WIZARD_NAMES[random(0, 8)] + ' ' + WIZARD_LAST_NAMES[random(0, 8)],
    coatColor: WIZARD_COATS_COLORS[random(0, 5)],
    eyesColor: WIZARD_EYES_COLORS[random(0, 4)]
  },
  {
    name: WIZARD_NAMES[random(0, 8)] + ' ' + WIZARD_LAST_NAMES[random(0, 8)],
    coatColor: WIZARD_COATS_COLORS[random(0, 5)],
    eyesColor: WIZARD_EYES_COLORS[random(0, 4)]
  },
  {
    name: WIZARD_NAMES[random(0, 8)] + ' ' + WIZARD_LAST_NAMES[random(0, 8)],
    coatColor: WIZARD_COATS_COLORS[random(0, 5)],
    eyesColor: WIZARD_EYES_COLORS[random(0, 4)]
  },
  {
    name: WIZARD_NAMES[random(0, 8)] + ' ' + WIZARD_LAST_NAMES[random(0, 8)],
    coatColor: WIZARD_COATS_COLORS[random(0, 5)],
    eyesColor: WIZARD_EYES_COLORS[random(0, 4)]
  },
  {
    name: WIZARD_NAMES[random(0, 8)] + ' ' + WIZARD_LAST_NAMES[random(0, 8)],
    coatColor: WIZARD_COATS_COLORS[random(0, 5)],
    eyesColor: WIZARD_EYES_COLORS[random(0, 4)]
  }
];

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');