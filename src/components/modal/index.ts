import "./modal.scss";

//общий файл
import Block from "../../utils/block";

//шаблон формы
import template from "./modal.hbs";

export class Modal extends Block {
  render() {
    return this.compile(template, { ...this.props });
  }
}
