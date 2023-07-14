import Swiper, { Navigation, Pagination } from "swiper";
import { ProgressBar } from "./classes/ProgressBar";

const featureSwiper = new Swiper(".features-swiper", {
  watchSlidesProgress: true,

  slidesPerView: "auto",

  modules: [Navigation, Pagination],

  direction: "horizontal",
});

//Progress bar ----------------------------------------------------
const itemsNum = document.querySelectorAll(".js-features-item").length;

const progressBar = new ProgressBar({
  container: ".js-progress-paginator",
  itemsNum: itemsNum,
  dotElClass: "features-swiper__dot",
  lineElClass: "features-swiper__line",
});

const nextBtn = document.querySelector(".js-features-next");
const prevBtn = document.querySelector(".js-features-prev");

nextBtn.addEventListener("click", () => {
  featureSwiper.slideNext();
  progressBar.next();
});

prevBtn.addEventListener("click", () => {
  featureSwiper.slidePrev();
  progressBar.prev();
});

featureSwiper.on("slideNextTransitionEnd", () => {
  progressBar.next();
});

featureSwiper.on("slidePrevTransitionEnd", () => {
  progressBar.prev();
});
