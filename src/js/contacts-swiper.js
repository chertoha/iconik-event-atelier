import Swiper, { Navigation } from "swiper";

const contactsSwiper = new Swiper(".contacts-swiper", {
  watchSlidesProgress: true,

  slidesPerView: "auto",

  modules: [Navigation],

  direction: "horizontal",

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
