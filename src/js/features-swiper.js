import Swiper, { Navigation } from "swiper";

const featureSwiper = new Swiper(".features-swiper", {
  watchSlidesProgress: true,

  slidesPerView: "auto",

  modules: [Navigation],

  direction: "horizontal",

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
