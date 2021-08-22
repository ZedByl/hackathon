import { Module } from "../core/module";

export default class ClicksModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    const clicksContainer = document.createElement("div");
    clicksContainer.className = "clicks-container text-center";
    const wrapper = document.querySelector('.wrapper')
    wrapper.prepend(clicksContainer)
    const startButton = document.createElement("button");
    startButton.innerText = "Нажмите для старта";
    startButton.className = "clicks-button btn btn-dark ";
    clicksContainer.append(startButton);

    let counter = 0;

    const getCount = function () {
      counter++;
    };

    startButton.addEventListener("click", (event) => {
      event.stopPropagation();
      startButton.remove();

      const helperElement = document.createElement("p");
      helperElement.className = "text-info";
      clicksContainer.append(helperElement);
      helperElement.innerText = "Секунда на подготовку!";

      const timerElement = document.createElement("p");
      timerElement.className = " text-primary";
      clicksContainer.append(timerElement);

      const result = document.createElement("h1");
      result.className = " text-success";
      clicksContainer.append(result);
      let timer = 4;

      const timerId = setInterval(() => {
        if (timer === 1) {
          timerElement.remove();
          result.innerHTML = `Итого кликов: ${counter}<br> <h6 class="text-center text-muted">Нажмите на текст, чтобы удалить</h6>`;
          result.addEventListener("click", () => {
            result.remove();
            clicksContainer.className = "hiden";
          });
          counter = 0;
          clicksContainer.removeEventListener("click", getCount);
          clearInterval(timerId);
        } else {
          timer--;
        }

        helperElement.remove();

        timerElement.innerText = `Кликайте! Осталось секунд: ${timer}`;
      }, 1000);

      clicksContainer.addEventListener("click", getCount);
    });
  }
}
