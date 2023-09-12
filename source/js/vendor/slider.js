import {swiper} from "./swiper";

export const createNewSlider1 = () => {
  new Swiper('#swiper-trainers', {
  direction: 'horizontal',
  autoHeight: true,
  loop: true,
  slidesPerView: 4,
  spaceBetween: 40,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 38,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
  navigation: {
    nextEl: '.trainers__swiper-button-next',
    prevEl: '.trainers__swiper-button-prev',
  },
});
};

export const createNewSlider2 = () => {
  new Swiper('#swiper-reviews', {
    direction: 'horizontal',
    autoHeight: true,
    loop: false,
    slidesPerView: 1,
    navigation: {
      nextEl: '.reviews__swiper-button-next',
      prevEl: '.reviews__swiper-button-prev',
    },
  });
}
