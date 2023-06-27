import Swiper, { Navigation } from "swiper";
// import "../../node_modules/swiper/css/pagination";
// import "swiper/";

const featureSwiper = new Swiper(".features-swiper", {
  watchSlidesProgress: true,

  slidesPerView: "auto",

  modules: [Navigation],

  direction: "horizontal",

  navigation: {
    nextEl: ".swiper-button-next.features__next",
    prevEl: ".swiper-button-prev.features__prev",
  },

  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
});
