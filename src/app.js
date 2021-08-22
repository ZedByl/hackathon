import './styles.css'
import 'bootstrap/dist/css/bootstrap.css'
import { ContextMenu } from './menu'
import * as Modules from './modules/'

const message = new Modules.MessageModule("message", "Важное сообщение");
const youtube = new Modules.YoutubeModal("youtube", "Уроки по Java Script");
const background = new Modules.BackgroundModule("background", "Поменять цвет");
const countDown = new Modules.CountDownModule("countDown", "Обратный отсчет");
const sound = new Modules.AudioModule("sound", "Случайный звук");
const clicksCounter = new Modules.ClicksModule("clicksCounter", "Аналитика кликов (3 сек)");
const shape = new Modules.ShapeModule("shape", "Случайная фигура");

const arr = { message, youtube, background, countDown, sound, clicksCounter, shape}

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
