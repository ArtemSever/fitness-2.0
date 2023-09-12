import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {initTabs} from './modules/tabs/init-tabs';
import {initAccordions} from './modules/accordion/init-accordion';
import {Form} from './modules/form-validate/form';
import {createNewSlider1, createNewSlider2} from './vendor/slider';
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------
  createNewSlider1();
  createNewSlider2();
  iosVhFix();
  const form = new Form();
  window.form = form;
  form.init();
  // Modules
  // ---------------------------------
  const playButton = document.querySelector('.gym__play-button-wrapper');
  const video = document.querySelector('.gym__video');
  const image = document.querySelector('.gym__video-image');

  if (playButton) {

    playButton.addEventListener('click', function () {
      playButton.style.display = 'none';
      if (image && video) {
        image.style.display = 'none';
        video.style.display = 'block';
      }
    });
  }

  const buyPassButton = document.getElementById('buyPassButton');
  const passesBlock = document.getElementById('passesBlock');

  if (buyPassButton && passesBlock) {
    buyPassButton.addEventListener('click', function (event) {
      event.preventDefault();
      passesBlock.scrollIntoView({behavior: 'smooth'});
    });
  }

  const footerTrainer = document.getElementById('footerTrainer');
  const trainersBlock = document.getElementById('trainersBlock');

  if (footerTrainer && trainersBlock) {
    footerTrainer.addEventListener('click', function (event) {
      event.preventDefault();
      trainersBlock.scrollIntoView({behavior: 'smooth'});
    });
  }

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    initTabs();
    initAccordions();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
