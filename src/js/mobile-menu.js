const mobileMenu = document.querySelector(".js-menu");
const openBtn = document.querySelector(".js-open-menu");
const closeBtn = document.querySelector(".js-close-menu");

openBtn.addEventListener("click", () => {
  mobileMenu.classList.add("is-open");
  openBtn.setAttribute("aria-expanded", true);
  document.body.classList.add("no-scroll");
});

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("is-open");
  openBtn.setAttribute("aria-expanded", false);
  document.body.classList.remove("no-scroll");
});

window.matchMedia("(min-width: 1200px)").addEventListener("change", (e) => {
  if (!e.matches) return;
  mobileMenu.classList.remove("is-open");
  openBtn.setAttribute("aria-expanded", false);
  document.body.classList.remove("no-scroll");
});
