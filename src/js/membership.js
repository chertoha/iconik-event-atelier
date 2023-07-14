const hiddenArticleList = document.querySelectorAll(".js-hidden-article-list");
const cardList = document.querySelector(".js-offer-card-list");

cardList.addEventListener("click", (e) => {
  if (e.target.classList.contains("js-cta-btn")) {
    return;
  }

  e.preventDefault();

  const targetBtn = e.target.closest(".js-offer-view-all-btn");
  if (targetBtn) {
    const targetCard = targetBtn.closest(".js-offer-card");
    const targetList = targetCard.querySelector(".js-hidden-article-list");
    targetList.classList.toggle("visually-hidden");

    const targetBtnText = targetBtn.querySelector(
      ".js-offer-view-all-btn-text"
    );
    const targetBtnMinusIcon = targetBtn.querySelector(
      ".js-offer-view-all-btn-minus-icon"
    );
    const targetBtnAddIcon = targetBtn.querySelector(
      ".js-offer-view-all-btn-add-icon"
    );
    if (targetList.classList.contains("visually-hidden")) {
      targetBtnText.innerText = "VIEW ALL FEATURES";
      targetBtnMinusIcon.style.display = "none";
      targetBtnAddIcon.style.display = "block";
    } else {
      targetBtnText.innerText = "VIEW LESS FEATURES";
      targetBtnMinusIcon.style.display = "block";
      targetBtnAddIcon.style.display = "none";
    }
  }
});

const toggleHiddenElements = () => {
  const viewportWidth = window.innerWidth;

  hiddenArticleList.forEach((item) => {
    if (viewportWidth < 768) {
      item.classList.add("visually-hidden");
    } else {
      item.classList.remove("visually-hidden");
    }
  });
};

window.addEventListener("DOMContentLoaded", toggleHiddenElements);
window.addEventListener("resize", toggleHiddenElements);
