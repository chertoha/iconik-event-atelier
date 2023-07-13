import Swiper, { Navigation } from "swiper";

const servicesSwiper = new Swiper(".services-swiper", {
  watchSlidesProgress: true,

  slidesPerView: "auto",

  modules: [Navigation],

  direction: "horizontal",

  navigation: {
    nextEl: ".swiper-button-next.js-services-next",
    prevEl: ".swiper-button-prev.js-services-prev",
  },
});
