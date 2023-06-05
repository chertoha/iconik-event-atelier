const volumeBtn = document.querySelector(".js-volume-btn");

volumeBtn.addEventListener("click", () => {
  volumeBtn.classList.toggle("audio-off");
});
