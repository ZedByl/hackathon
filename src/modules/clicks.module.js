import { Module } from "../core/module";
import "bootstrap/dist/css/bootstrap.css";

export class ClicksModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    let button = document.querySelector("button");

    let counter = 0;

    let getCount = function () {
      counter++;
    };

    button.addEventListener("click", (event) => {
      event.stopPropagation();

      let helperElement = document.createElement("p");
      helperElement.className = "text-center text-danger";
      document.body.append(helperElement);
      helperElement.innerText = "Секунда на подготовку!";

      let timerElement = document.createElement("p");
      timerElement.className = "text-center text-primary";
      document.body.append(timerElement);

      let result = document.createElement("h1");
      result.className = "text-center text-success";
      document.body.append(result);
      let timer = 4;

      let timerId = setInterval(() => {
        if (timer === 1) {
          timerElement.remove();
          result.innerHTML = `Итого кликов: ${counter}<br> <h6 class="text-center text-muted">Нажмите, чтобы удалить</h6>`;
          result.addEventListener("click", () => {
            result.remove();
          });
          counter = 0;
          document.removeEventListener("click", getCount);
          clearInterval(timerId);
        } else {
          timer--;
        }
        helperElement.remove();
        timerElement.innerText = `Кликайте! Осталось секунд: ${timer}`;
      }, 1000);

      document.addEventListener("click", getCount);
    });
  }
}

// let click = new ClicksModule("click", "click");
// click.trigger();
