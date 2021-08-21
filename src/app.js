import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'
import { ContextMenu } from './menu'
import * as Modules from './modules/'

const message = new Modules.MessageModule('message', 'Важное сообщение')
const voice = new Modules.ShapeModule('voice', 'Важное звук')
const youtube = new Modules.YoutubeModal('youtube', 'Уроки по Java Script')
const background = new Modules.BackgroundModule('background', 'Поменять цвет')
const arr = {voice, message, youtube, background}

const menu = new ContextMenu()
ContextMenu.open(menu.menu)
ContextMenu.close(menu.menu)

for (let item in arr) {
  ContextMenu.add(menu.menu, arr[item].toHTML())
}


document.querySelector('#menu').addEventListener('click', (e) => {
  const { target } = e
  if (target.id) {
    arr[target.id].trigger()
  } else {
    alert('Функция еще не добавлена')
  }
})
