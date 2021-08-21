export class Module {
  constructor(type, text) {
    if (!type) {
      throw new Error('Please specify "type" param')
    }
    if (!text) {
      throw new Error('Please specify "text" param')
    }
    this.type = type
    this.text = text
  }

  toHTML() {
    const li = document.createElement('li')
    li.className = 'menu-item'
    li.id = this.type
    li.textContent = this.text
    return li
  }

  trigger() {}
}