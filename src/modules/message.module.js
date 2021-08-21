import {Module} from '../core/module'
import {messageWindow} from '../utils/utilMessage'

export default class MessageModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  static trigger() {
    const toast = document.querySelector('#toast')
    toast.innerHTML = messageWindow
    const message = document.querySelector('.toast') || null
    message.style.display = 'block'
    setTimeout(() => {
      message.style.display = 'none'
    }, 5000)
  }
}