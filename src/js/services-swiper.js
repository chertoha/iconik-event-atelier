import Swiper, { Navigation } from "swiper";

// Swiper.use([Navigation, Pagination]);
// init Swiper:
const servicesSwiper = new Swiper(".services-swiper", {
  watchSlidesProgress: true,

  slidesPerView: "auto",

  modules: [Navigation],

  direction: "horizontal",

  // If we need pagination
  // pagination: {
  //   el: ".swiper-pagination",
  // },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
