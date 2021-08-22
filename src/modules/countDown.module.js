import { Module } from "../core/module";

export default class CountDownModule extends Module {
  #container;
  #time;
  #timerHTML;
  #countContainer;

  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    if (
      !document.querySelector(".count__down-container") &&
      !document.querySelector(".timer__html")
    ) {
      this.#container = document.querySelector("body");
      const form = this.#render();
      this.#container.append(form);
    } else {
      console.error("Блок обратного осчета уже вызван");
    }

    document.body.addEventListener("click", (event) => {
      const { target } = event;
      if (target.className == "count__down-container") {
        this.#countContainer.remove();
      } else if (target.className == "timer__html") {
        this.#timerHTML.remove();
        clearInterval(this.countInterval);
      }
    });
  }

  #render() {
    this.#countContainer = document.createElement("div");
    this.#countContainer.className = "count__down-container";

    const inputForm = document.createElement("form");
    inputForm.className = "count__down-form";
    this.#countContainer.append(inputForm);

    inputForm.addEventListener("submit", (event) => {
      event.preventDefault();
      this.#countContainer.remove();
      const { target } = event;
      this.#time = input.value;
      this.#timerHTML = document.createElement("div");
      this.#timerHTML.className = "timer__html";
      this.#container.append(this.#timerHTML);
      if (this.#time) {
        this.#countDownStart();
      } else {
        this.#countDownStop();
      }
    });

    const title = document.createElement("div");
    title.textContent = "Таймер обратного отсчета";
    title.className = "count__down-title";

    const inputContainer = document.createElement("div");
    inputContainer.className = "count__down-input--container";

    const submitBtn = document.createElement("button");
    submitBtn.className = "count__down-btn";
    submitBtn.textContent = "Подтвердить";
    submitBtn.type = "submit";

    inputForm.append(title, inputContainer, submitBtn);

    const input = document.createElement("input");
    input.id = "timer";
    input.className = "count__down-input";
    input.type = "number";
    input.placeholder = " ";
    input.name = "amount";
    input.min = "1";
    input.required = "";

    const shortInputName = document.createElement("div");
    shortInputName.className = "count__down-short";

    const label = document.createElement("label");
    label.for = "timer";
    label.className = "count__down-placeholder";
    label.textContent = "Кол-во секунд:";
    inputContainer.append(input, shortInputName, label);

    return this.#countContainer;
  }

  #countDownStart() {
    this.#setTime(this.#time);
    this.countInterval = setInterval(this.#decreaseTime.bind(this), 1000);
  }

  #setTime(time) {
    this.#timerHTML.innerHTML = `${time}`;
  }

  #decreaseTime() {
    if (this.#time === 0) {
      this.#timerHTML.innerHTML = `Время вышло`;
      setTimeout(this.#countDownStop.bind(this), 5000);
      clearInterval(this.countInterval);
    } else {
      let current = --this.#time;
      this.#setTime(current);
    }
  }

  #countDownStop() {
    this.#timerHTML.remove();
  }
}
