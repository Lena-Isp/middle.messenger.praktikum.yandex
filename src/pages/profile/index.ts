//общие стили
import '../../assets/app.scss';

import { render } from "../../utils/renderDom";
//компоненты
import FormProfile from "../../components/form-profile";
import InputChange from "../../components/input-change";
import FileLoad from "../../components/file-load";
import Avatar from "../../components/avatar";
import Modal from "../../components/modal";

const profile = new FormProfile({
  avatar: new Avatar({
    title: "Иван",
  }),
  inputMail: new InputChange({
    title: "Почта",
    type: "email",
    placeholder: "pochta@yandex.ru",
    name: "email"
  }),
  inputLogin: new InputChange({
    title: "Логин",
    type: "text",
    placeholder: "ivanivanov",
    name: "login"
  }),
  inputName: new InputChange({
    title: "Имя",
    type: "text",
    placeholder: "Иван",
    name: "first_name"
  }),
  inputLastName: new InputChange({
    title: "Фамилия",
    type: "text",
    placeholder: "Иванов",
    name: "second_name"
  }),
  inputTel: new InputChange({
    title: "Телефон",
    type: "tel",
    placeholder: "+7(909)967-30-30",
    name: "phone"
  }),
  oldPassword: new InputChange({
    title: "password",
    type: "tel",
    placeholder: "•••••••",
    name: "oldPassword"
  })
});

const modal = new Modal({
  child: new FileLoad({})
})

document.addEventListener("DOMContentLoaded", () => {
  render(".wrapper", profile);
  render(".modal", modal);
});
