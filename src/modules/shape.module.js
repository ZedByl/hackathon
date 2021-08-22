import { Module } from "../core/module";
import { getRandomNumber } from "../utils/utils";
import { shapeColors } from "../utils/shapeForm";
export default class ShapeModule extends Module {
  #shapeContainer;
  #body;

  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    this.#body = document.querySelector("body");
    if (!document.querySelector(".shape")) {
      this.#body.append(this.#render());
    } else {
      this.#shapeContainer.remove();
      this.#body.append(this.#render());
    }

    document.body.addEventListener("click", (event) => {
      const { target } = event;
      if (target == document.body) {
        this.#shapeContainer.remove();
      }
    });
  }

  #render() {
    this.#shapeContainer = document.createElement("div");
    this.#shapeContainer.className = "shape";

    const shapeHeight = getRandomNumber(50, 250);
    const shapeWidth = getRandomNumber(50, 250);
    const borderRadius = getRandomNumber(0, 50);
    const backgroundColor =
      shapeColors[getRandomNumber(0, shapeColors.length - 1)];
    const borderColor = shapeColors[getRandomNumber(0, shapeColors.length - 1)];
    const borderWidth = getRandomNumber(2, 7);

    const { width, height } = this.#body.getBoundingClientRect();

    const y = getRandomNumber(0, height - shapeHeight);
    const x = getRandomNumber(0, width - shapeWidth);

    this.#shapeContainer.style.position = "absolute";
    this.#shapeContainer.style.top = `${y}px`;
    this.#shapeContainer.style.left = `${x}px`;
    this.#shapeContainer.style.height = `${shapeHeight}px`;
    this.#shapeContainer.style.width = `${shapeWidth}px`;
    this.#shapeContainer.style.backgroundColor = `${backgroundColor}`;
    this.#shapeContainer.style.borderRadius = `${borderRadius}%`;
    this.#shapeContainer.style.borderColor = `${borderColor}`;
    this.#shapeContainer.style.borderWidth = `${borderWidth}px`;
    this.#shapeContainer.style.borderStyle = "solid";

    return this.#shapeContainer;
  }
}
