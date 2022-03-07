import "./button.scss";
import "./button.ts";

import Block from "../../utils/block";
// Ваш реализованный шаблонизатор
import template from "./button.hbs";

//описание переменных
interface ButtonProps {
  modifer: string,
  child?: string,
  events?: {
    click?: () => void
  }
}

export class Button extends Block {
  render() {
    return this.compile(template, { ...this.props });
  }
}
