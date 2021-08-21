import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'
import { ContextMenu } from './menu'
import * as Modules from './modules/'


const message = new Modules.MessageModule('message', 'Важное сообщение')
const voice = new Modules.ShapeModule('voice', 'Важное звук')
const youtube = new Modules.YoutubeModal('youtube', 'Уроки по Java Script')
const arr = [voice, message, youtube]

const menu = new ContextMenu()

ContextMenu.open(menu.menu)

ContextMenu.close(menu.menu)

arr.map((item) => {
  ContextMenu.add(menu.menu, item.toHTML())
})

document.querySelector('#menu').addEventListener('click', (e) => {
  const { target } = e
  console.log(target.id)
    if ('message' === target.id) {
      Modules.MessageModule.trigger()
    } else if ('youtube' === target.id) {
      Modules.YoutubeModal.trigger()
    } else if ('voice' === target.id) {
      Modules.ShapeModule.trigger()
    } else {
      alert('Функционал еще не добавлен')
    }
})
