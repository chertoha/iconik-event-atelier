const blocks = document.querySelectorAll(".js-trim-offset-height-block");

blocks.forEach((blockRef) => {
  const textRef = blockRef.querySelector(".js-trim-offset-height-text");
  trimTextByOffsetHeight(blockRef, textRef);
});

function trimTextByOffsetHeight(blockRef, textRef) {
  if (textRef.offsetHeight <= blockRef.offsetHeight) return;

  while (textRef.offsetHeight > blockRef.offsetHeight) {
    textRef.innerHTML = textRef.innerHTML.slice(0, -1);
  }
  textRef.innerHTML = textRef.innerHTML.slice(0, -2);
  textRef.innerHTML += "...";
}
