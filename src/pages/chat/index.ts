import '../../assets/app.scss';

import { render } from "../../utils/renderDom";
import Dialog from "../../components/dialog";
import Message from "../../components/message";
import MessegeInput from "../../components/messegeInput";
import Chat from "../../components/chat";

const chat = new Chat({
  nameTop: "Вадим",
  dialog: new Dialog({
    name: "Илья",
    lead: "Друзья, у меня для вас особенный выпуск новостей!...",
    message:"5",
  }),
  dialogChat: new Dialog({
    name: "киноклуб",
    lead: "И Human Interface Guidelines и Material Design рекомендуют...",
    classActive: "dialog--active",
    message:"3",
  }),
  message: new Message({
    text: "Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.",
    textSend: "Круто!",
  }),
  messegeInput: new MessegeInput()
});

document.addEventListener("DOMContentLoaded", () => {
  render(".app", chat);
});
