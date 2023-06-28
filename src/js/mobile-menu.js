const mobileMenu = document.querySelector(".js-menu");
const openBtn = document.querySelector(".js-open-menu");
const closeBtn = document.querySelector(".js-close-menu");
const headerNavList = document.querySelector("#js-header-nav-list");
const ctaBtn = document.querySelector("#js-cta-button");

const closeMenu = () => {
  mobileMenu.classList.remove("is-open");
  openBtn.setAttribute("aria-expanded", false);
  document.body.classList.remove("no-scroll");
};

openBtn.addEventListener("click", () => {
  mobileMenu.classList.add("is-open");
  openBtn.setAttribute("aria-expanded", true);
  document.body.classList.add("no-scroll");
});

closeBtn.addEventListener("click", () => {
  closeMenu();
});

window.matchMedia("(min-width: 1200px)").addEventListener("change", (e) => {
  if (!e.matches) return;
  closeMenu();
});

headerNavList.addEventListener("click", (e) => {
  if (e.target.classList.contains("js-header-nav-link")) {
    closeMenu();
  }
});

ctaBtn.addEventListener("click", () => {
  closeMenu();
});

window.addEventListener("keydown", (e) => {
  if (e.code === "Escape") {
    console.log("esc");
  }
});
