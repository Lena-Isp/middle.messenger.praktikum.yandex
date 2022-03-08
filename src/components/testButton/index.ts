import "./testButton.scss";

import Block from "../../utils/block";
// Ваш реализованный шаблонизатор
import template from "./testButton.hbs";

//описание переменных
interface ButtonProps {
  modifer: string,
  child?: string,
  events?: {
    click?: () => void
  }
}

export class TestButton extends Block {

  render() {
    // В данном случае render возвращает строкой разметку из шаблонизатора
    return this.compile(template, { ...this.props });
  }
}



