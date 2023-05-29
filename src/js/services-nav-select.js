const btnRef = document.querySelector(".js-services-btn");
const listRef = document.querySelector(".js-services-list");

btnRef.addEventListener("click", () => {
  listRef.classList.add("is-open");
});

listRef.addEventListener("click", (e) => {
  if (e.target.classList.contains("js-services-label")) {
    btnRef.innerText = e.target.innerText;
    listRef.classList.remove("is-open");
  }
});
