import "./input-change.scss";
//стили
//import "./form.scss";

//общий файл
import Block from "../../utils/block";

//шаблон инпута
import template from "./input-change.hbs";

export class TemplateInputChange extends Block {
  render() {
    return this.compile(template, { ...this.props });
  }
}
