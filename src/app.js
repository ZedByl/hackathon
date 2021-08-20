import './styles.css'
import { ContextMenu } from './menu'




const menu = new ContextMenu()
ContextMenu.open(menu.menu)
ContextMenu.close(menu.menu)
ContextMenu.add(menu.menu, null)


