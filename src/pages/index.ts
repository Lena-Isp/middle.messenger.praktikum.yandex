// У кнопки есть index.js, который экспортирует только нужное
//общие стили
import '../assets/app.scss';

import { render } from "../utils/renderDom";
import { TemplateForm } from "../components/form";
import { Button } from "../components/button";
import { Input } from "../components/input";

//-страница login
export const login = new TemplateForm({
  header: "Вход",
  inputLogin: new Input({
    title: 'Логин',
    type: 'text',
    name: 'login',
  }),
  inputPassword: new Input({
    title: 'Пароль',
    type: 'password',
    name: 'password',
  }),
  button: new Button({
    text: 'войти',
  }),
  link: "/registration/index.html",
  footerText: "регистрация"
});

document.addEventListener("DOMContentLoaded", () => {
  render(".wrapper", login);
});
