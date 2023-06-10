const blocks = document.querySelectorAll(".js-trim-offset-height-block");

const updateTrim = () => {
  blocks.forEach((block) => {
    const text = block.querySelector(".js-trim-offset-height-text");
    trimTextByOffsetHeight(block, text);
  });
};

function trimTextByOffsetHeight(blockRef, textRef) {
  if (textRef.offsetHeight <= blockRef.offsetHeight) return;

  let cut = "";
  while (textRef.offsetHeight > blockRef.offsetHeight) {
    // console.log(textRef.innerHTML);
    cut += textRef.innerHTML.slice(-1);
    textRef.innerHTML = textRef.innerHTML.slice(0, -1);
  }

  const insteadOfDots = textRef.innerHTML.slice(-2);
  textRef.innerHTML = textRef.innerHTML.slice(0, -2);

  const nonVisiblePart = insteadOfDots + cut.split("").reverse().join("");

  textRef.innerHTML = `${textRef.innerHTML} <span class="non-visible">${nonVisiblePart}</span>`;
}

window.addEventListener("DOMContentLoaded", updateTrim);
window.addEventListener("resize", updateTrim);
