export class Select {
  constructor(buttonID, listID, labelClass) {
    this.refs = {
      btn: document.getElementById(buttonID),
      list: document.getElementById(listID),
    };
    this.labelClass = labelClass;
  }

  init() {
    const {
      refs: { btn, list },
      labelClass,
    } = this;

    btn.addEventListener("click", () => {
      list.classList.add("is-open");
    });

    list.addEventListener("click", (e) => {
      if (e.target.classList.contains(labelClass)) {
        btn.innerText = e.target.innerText;
        list.classList.remove("is-open");
      }
    });
  }
}
