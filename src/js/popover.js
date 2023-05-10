export default class Popover {
  _popovers = [];

  constructor(clickElement, title, message) {
    this.clickElement = clickElement;
    this.message = message;
    this.title = title;

    this.showPopover = this.showPopover.bind(this);
    this.removePopover = this.removePopover.bind(this);
    this.onCLick = this.onCLick.bind(this);
    Popover.clearAllPopovers = Popover.clearAllPopovers.bind(this);
    this.clickElement.addEventListener("click", this.onCLick);
  }

  showPopover() {
    const popEl = document.createElement("DIV");
    popEl.classList.add("popover");
    popEl.textContent = this.message;
    this.id = performance.now();

    this._popovers.push({
      id: this.id,
      element: popEl,
    });

    document.body.appendChild(popEl);
    const title = document.createElement("DIV");
    title.classList.add("title");
    title.textContent = this.title;
    document.body.appendChild(title);

    const { top, left } = this.clickElement.getBoundingClientRect();

    title.style.width = 1.1 * this.clickElement.offsetWidth + "px";
    popEl.style.width = 1.1 * this.clickElement.offsetWidth + "px";
    console.log(this.clickElement.offsetWidth);
    popEl.style.top = top - popEl.offsetHeight - 24 + "px";
    popEl.style.left =
      left - (this.clickElement.offsetWidth * 0.1) / 2 - 4 + "px";

    title.style.top = top - popEl.offsetHeight - title.offsetHeight - 24 + "px";
    title.style.left =
      left - (this.clickElement.offsetWidth * 0.1) / 2 - 4 + "px";
  }

  removePopover() {
    const popover = this._popovers.find((p) => p.id === this.id);
    if (!(popover === undefined)) {
      popover.element.nextElementSibling.remove();
      popover.element.remove();

      this._popovers = this._popovers.filter((p) => p.id !== this.id);
    }
    return popover;
  }

  static clearAllPopovers() {
    for (let p in this._popovers) {
      p.element.remove();
    }
    this._popovers.length = 0;
  }

  onCLick() {
    if (!this.removePopover()) {
      this.showPopover();
    }
  }
}
