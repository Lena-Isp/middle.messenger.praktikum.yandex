import "./file-load.scss";

import Block from "../../utils/block";
import { Button } from "../button";
// шаблонизатор
import template from "./file-load.hbs";

//описание переменных
interface ButtonProps {
  button?: Block,
  events?: {
    click?: () => void
  }
}

export class fileLoad extends Block {
  constructor(props: Props) {
    const props = {
      button: new Button()
    }
    super({
      ...props,
      props,
    });
  }
  render() {
    return this.compile(template, { ...this.props });
  }
}
