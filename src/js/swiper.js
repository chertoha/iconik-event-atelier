import Swiper, { Navigation } from "swiper";

// Swiper.use([Navigation, Pagination]);
// init Swiper:
const swiper = new Swiper(".swiper", {
  watchSlidesProgress: true,
  slidesPerView: 5,
  modules: [Navigation],

  // Optional parameters
  direction: "horizontal",
  //   loop: true,
  //   rewind: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
