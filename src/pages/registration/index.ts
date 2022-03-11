//стили
import '../../assets/app.scss';
import { render } from "../../utils/renderDom";

import Form from "../../components/form";
import Button from "../../components/button";
import Input from "../../components/input";

const registarationForm = new Form({
  header: "Регистрация",
  inputMail: new Input({
    title: 'Почта',
    type: 'text',
    name: 'mail',
  }),
  inputLogin: new Input({
    title: 'Логин',
    type: 'text',
    name: 'login',
  }),
  inputName: new Input({
    title: 'Имя',
    type: 'text',
    name: 'firstName',
  }),
  inputLastName: new Input({
    title: 'Фамилия',
    type: 'text',
    name: 'lastName',
  }),
  inputPhone: new Input({
    title: 'Телефон',
    type: 'tel',
    name: 'Tel',
  }),
  inputPassword: new Input({
    title: 'Пароль',
    type: 'password',
    name: 'password',
  }),
  button: new Button({
    text: 'Регистрация',
  }),
  link: "/index.html",
  footerText: "войти"
});

document.addEventListener("DOMContentLoaded", () => {
  render(".wrapper", registarationForm);
});
