import "./input.scss";

import Block from "../../utils/block";
// Ваш реализованный шаблонизатор
import template from "./input.hbs";

//описание переменных
interface InputProps {
  modifer: string,
  title: string,
  type: string,
  name: string,
  events?: {
    click?: () => void
  }
}

export class Input extends Block {
  render() {
    return this.compile(template, { ...this.props });
  }
}
