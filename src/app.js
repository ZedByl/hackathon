import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import { ContextMenu } from "./menu";
import { MessageModule } from "./modules/message.module";
import { ClicksModule } from "./modules/clicks.module";

const message = new MessageModule("message", "Важное сообщение");
const menu = new ContextMenu();
ContextMenu.open(menu.menu);
ContextMenu.close(menu.menu);
ContextMenu.add(menu.menu, message);

console.log(message);
