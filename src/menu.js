import {Menu} from './core/menu'

export class ContextMenu extends Menu {
  constructor() {
    super();
  }

  static open(menu) {
    document.body.addEventListener('contextmenu', event => {
      event.preventDefault()
      menu.style.top = `${event.clientY}px`
      menu.style.left = `${event.clientX}px`
      menu.classList.add('open')
    })
  }

  static close(menu) {
    document.body.addEventListener('click', event => {
      if (event.button !== 2) {
        menu.classList.remove('open')
      }
    })
  }


  static add(menu, instanceofModule) {
    menu.append(instanceofModule)
  }
}