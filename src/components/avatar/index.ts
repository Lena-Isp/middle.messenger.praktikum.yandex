import "./avatar.scss";
import "./avatar.ts";

import Block from "../../utils/block";
// шаблонизатор
import template from "./avatar.hbs";

//описание переменных
interface ButtonProps {
  modifer: string,
  child?: string,
  events?: {
    click?: () => void
  }
}

export class Avatar extends Block {
  render() {
    return this.compile(template, { ...this.props });
  }
}
