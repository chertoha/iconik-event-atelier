const eventCardTitleWrapper = document.querySelector(
  ".js-event-card-title-wrapper "
);
const eventCardTitle = document.querySelector(".js-event-card-title ");

const trimTextByOffsetHeight = (blockRef, textRef) => {
  while (textRef.offsetHeight > blockRef.offsetHeight) {
    textRef.innerHTML = textRef.innerHTML.slice(0, -1);
  }
  textRef.innerHTML = textRef.innerHTML.slice(0, -2);
  textRef.innerHTML += "...";
};

trimTextByOffsetHeight(eventCardTitleWrapper, eventCardTitle);

console.log(eventCardTitle.innerHTML);
