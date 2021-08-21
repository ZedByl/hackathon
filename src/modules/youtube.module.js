import {Module} from '../core/module'
import {youtubeModal} from '../utils/utilMessage'

export default class YoutubeModule extends Module {
  #youtube
  constructor(type, text) {
    super(type, text);
    this.#youtube = document.querySelector('.youtube')
  }



  trigger() {

    this.#youtube.innerHTML = youtubeModal
    const closeModal = document.querySelector('.btn-close')
    const message = document.querySelector('.modal-content')
    closeModal.addEventListener('click', () => {
      message.style.display = 'none'
    })
  }
}