import Swiper, { Navigation } from "swiper";

const eventsSwiper = new Swiper(".events-swiper", {
  watchSlidesProgress: true,

  slidesPerView: "auto",

  modules: [Navigation],

  direction: "horizontal",
});
