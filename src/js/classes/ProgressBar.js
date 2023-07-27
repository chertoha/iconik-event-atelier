export class ProgressBar {
  constructor({ container, itemsNum, dotElClass, lineElClass }) {
    this.container = document.querySelector(container);
    this.dotElClass = dotElClass;
    this.lineElClass = lineElClass;
    this.itemsNum = itemsNum;
    this.pos = 0;

    this.lineEl = null;

    this.container.style.position = "relative";

    this.#init();
  }

  #init() {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i <= this.itemsNum; i++) {
      const dotEl = document.createElement("div");
      dotEl.classList.add(this.dotElClass);
      dotEl.style.left = `${(i / this.itemsNum) * 100}%`;
      fragment.appendChild(dotEl);
    }

    this.lineEl = document.createElement("div");
    this.lineEl.classList.add(this.lineElClass);
    this.lineEl.style.width = `${100 / this.itemsNum}%`;
    this.lineEl.style.left = "0";
    fragment.appendChild(this.lineEl);

    this.container.appendChild(fragment);
  }

  prev() {
    if (this.pos > 0) {
      this.pos -= 1;
      this.#linePos(this.pos);
    }
  }

  next() {
    if (this.pos < this.itemsNum - 1) {
      this.pos += 1;
      this.#linePos(this.pos);
    }
  }

  setPosition(posistion) {
    this.pos = posistion;
    this.#linePos(this.pos);
  }

  #linePos(position) {
    this.lineEl.style.left = `${(position / this.itemsNum) * 100}%`;
  }
}
