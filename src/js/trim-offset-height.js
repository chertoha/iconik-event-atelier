const blocks = document.querySelectorAll(".js-trim-offset-height-block");

blocks.forEach((block) => {
  const text = block.querySelector(".js-trim-offset-height-text");
  trimTextByOffsetHeight(block, text);
});

function trimTextByOffsetHeight(blockRef, textRef) {
  if (textRef.offsetHeight <= blockRef.offsetHeight) return;
  // console.log("asd");
  // textRef.innerHTML = `<span class="visible">${textRef.innerHTML}</span>`;

  // textRef.innerHTML = `<span class="visible">Dubai Marina Yacht</span> <span class="non-visible"> Tour with Barbecue Lunch - exclusive Yachts</span>`;

  let cut = "";

  while (textRef.offsetHeight > blockRef.offsetHeight) {
    // textRef.innerHTML = `<span class="visible">${textRef.innerHTML}</span>`;
    cut += textRef.innerHTML.slice(-1);
    textRef.innerHTML = textRef.innerHTML.slice(0, -1);
  }
  const insteadOfDots = textRef.innerHTML.slice(-2);
  // cut += textRef.innerHTML.slice(-2);
  // textRef.innerHTML = textRef.innerHTML.slice(0, -2) + "...";
  textRef.innerHTML = textRef.innerHTML.slice(0, -2);

  // console.log(insteadOfDots + cut.split("").reverse().join(""));

  const nonVisiblePart = insteadOfDots + cut.split("").reverse().join("");

  textRef.innerHTML = `${textRef.innerHTML} <span class="non-visible">${nonVisiblePart}</span>`;

  // console.log(cut.split("").reverse().join(""));
  // console.log(blockRef.offsetHeight);
  // if (textRef.offsetHeight <= blockRef.offsetHeight) return;
  // while (textRef.offsetHeight > blockRef.offsetHeight) {
  //   textRef.innerHTML = textRef.innerHTML.slice(0, -1);
  // }
  // textRef.innerHTML = textRef.innerHTML.slice(0, -2);
  // textRef.innerHTML += "...";
}

// blocks.forEach((block) => {
//   const blockClone = block.cloneNode(true);
//   const text = blockClone.querySelector(".js-trim-offset-height-text");

//   blockClone.classList.add("trimmed");
//   block.insertAdjacentElement("afterend", blockClone);

//   trimTextByOffsetHeight(blockClone, text);
// });

// function trimTextByOffsetHeight(blockRef, textRef) {
//   // console.log(blockRef.offsetHeight);

//   if (textRef.offsetHeight <= blockRef.offsetHeight) return;

//   while (textRef.offsetHeight > blockRef.offsetHeight) {
//     textRef.innerHTML = textRef.innerHTML.slice(0, -1);
//   }
//   textRef.innerHTML = textRef.innerHTML.slice(0, -2);
//   textRef.innerHTML += "...";
// }

/*
.main-block.is-visible
  h3.main-text.is-visible

  h3.fake-text.is-visible -> get main text -> set updated
.

*/

// const blockClones = document.querySelectorAll(
//   ".js-trim-offset-height-block.trimmed"
// );

// const applyTrim = () => {
//   const viewportWidth = window.innerWidth;

//   blocks.forEach((block) => {
//     if (viewportWidth < 768) {
//       block.style.display = "none";
//     } else {
//       block.style.display = "block";
//     }
//   });

//   blockClones.forEach((block) => {
//     if (viewportWidth < 768) {
//       block.style.display = "block";
//     } else {
//       block.style.display = "none";
//     }
//   });
// };

// window.addEventListener("DOMContentLoaded", applyTrim);
// window.addEventListener("resize", applyTrim);
