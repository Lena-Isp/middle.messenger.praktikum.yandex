//стили
import "./form.scss";

//общий файл
import Block from "../../utils/block";

//шаблон формы
import template from "./form.hbs";

//компоненты
import { Button } from "../../components/button";
import { Input } from "../../components/input";

export class TemplateForm extends Block {
  render() {
    return this.compile(template, { ...this.props });
  }
}
