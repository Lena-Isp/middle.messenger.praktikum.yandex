//общие стили
import '../../assets/app.scss';

import { render } from "../../utils/renderDom";

import PasswordChange from "../../components/password-change";
import Button from "../../components/button";
import Input from "../../components/input";
import Back from "../../components/back";

const passwordChange = new PasswordChange({
  oldPassword: new Input({
    title: "Старый пароль",
    type: "password",
    name: "oldPassword"
  }),
  newPassword: new Input({
    title: "Новый пароль",
    type: "password",
    name: "newPassword"
  }),
  repeatPassword: new Input({
    title: "Повторите новый пароль",
    type: "password",
    name: "repeatPassword"
  }),
  button: new Button({
    text: "сохранить",
  }),
});

const back = new Back({
  link: "/profile/index.html"
})

document.addEventListener("DOMContentLoaded", () => {
  render(".wrapper", passwordChange);
  render(".back", back);
});
