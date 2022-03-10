//общие стили
import '../../assets/app.scss';

import { render } from "../../utils/renderDom";
import ProfileChange from "../../components/profile-change";
import Button from "../../components/button";
import Input from "../../components/input";
import Back from "../../components/back";


const profileChange = new ProfileChange({
  inputMail: new Input({
    title: "Почта",
    type: "email",
    name: "email"
  }),
  inputLogin: new Input({
    title: "Логин",
    type: "text",
    name: "login"
  }),
  inputName: new Input({
    title: "Имя",
    type: "text",
    name: "first_name"
  }),
  inputLastName: new Input({
    title: "Фамилия",
    type: "text",
    name: "second_name"
  }),
  inputTel: new Input({
    title: "Телефон",
    type: "tel",
    name: "phone"
  }),
  button: new Button({
    text: 'Сохранить',
  }),
});

const back = new Back({
  link: "/profile/index.html"
})

document.addEventListener("DOMContentLoaded", () => {
  render(".wrapper", profileChange);
  render(".back", back);
});
