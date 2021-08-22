import { Module } from "../core/module";
import { sounds } from "../utils/sounds";
import { getRandomNumber } from "../utils/utils";

export default class AudioModule extends Module {
  #sound;
  #body;

  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    if (!document.querySelector(".sound__item")) {
      this.#playSound();
    } else {
      console.log("Звук ещё не завершен");
    }
  }

  #getRandomSound() {
    const keys = Object.keys(sounds);
    const randomURL = getRandomNumber(0, keys.length - 1);
    return sounds[keys[randomURL]];
  }

  #playSound() {
    this.#body = document.querySelector("body");
    this.#sound = document.createElement("audio");
    this.#sound.addEventListener("ended", (event) => {
      event.preventDefault();
      this.#sound.remove();
    });

    this.#sound.className = "sound__item";
    this.#sound.src = this.#getRandomSound();
    this.#sound.autoplay = "autoplay";
    this.#body.append(this.#sound);
  }
}
