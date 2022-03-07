//общие стили
import '../../assets/app.scss';

//компоненты(берет стили и js из index.js)
import '../../components/input-change';
import '../../components/button';
import '../../components/avatar';
import '../../components/modal';
import '../../components/file-load'
import '../../components/form'


// общие стили
import '../../assets/app.scss';

import { render } from "../../utils/renderDom";
//компоненты
import { Avatar } from "../../components/avatar";
import { TemplateFormfg } from "../../components/form-profile";
import { TemplateInputChange } from "../../components/input-change";
import { Input } from "../../components/input";

export const registaration = new TemplateFormfg({
  avatar: new Avatar({
    avatarSrc:"./static/img/avatar.svg",
    title: "Иван",
  }),
  inputMail: new TemplateInputChange({
    title: "Почта",
    type: "email",
    placeholder: "pochta@yandex.ru",
    name: "email"
  }),
  inputLogin: new TemplateInputChange({
    title: "Логин",
    type: "text",
    placeholder: "ivanivanov",
    name: "login"
  }),
  inputName: new TemplateInputChange({
    title: "Имя",
    type: "text",
    placeholder: "Иван",
    name: "first_name"
  }),
  inputLastName: new TemplateInputChange({
    title: "Фамилия",
    type: "text",
    placeholder: "Иванов",
    name: "second_name"
  }),
  inputTel: new TemplateInputChange({
    title: "Телефон",
    type: "tel",
    placeholder: "+7(909)967-30-30",
    name: "phone"
  }),
  oldPassword: new TemplateInputChange({
    title: "password",
    type: "tel",
    placeholder: "•••••••",
    name: "oldPassword"
  })
});

document.addEventListener("DOMContentLoaded", () => {
  render(".wrapper", registaration);
});
