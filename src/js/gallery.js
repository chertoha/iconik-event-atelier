import Masonry from "masonry-layout";
// vanilla JS
// init with element
var grid = document.querySelector(".gallery__grid");
var msnry = new Masonry(grid, {
  // options...
  itemSelector: ".gallery__item",
  columnWidth: ".grid-sizer",
});

// init with selector
// var msnry = new Masonry(".grid", {
//   // options...
// });
