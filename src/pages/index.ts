import '../assets/app.scss';

import { render } from "../utils/renderDom";
import Form from "../components/form";
import Button from "../components/button";
import Input from "../components/input";

//-страница login
const formLogin = new Form({
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
    text: 'войти'
  }),
  link: "/registration/index.html",
  footerText: "регистрация"
});

document.addEventListener("DOMContentLoaded", () => {
  render(".wrapper--index", formLogin);
});
