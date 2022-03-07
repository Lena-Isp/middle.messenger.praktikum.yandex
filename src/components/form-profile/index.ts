//стили
//import "./form.scss";

//общий файл
import Block from "../../utils/block";

//шаблон формы
import template from "./form-profile.hbs";

//компоненты
import { Button } from "../../components/button";
import { Input } from "../../components/input";

export class TemplateFormfg extends Block {
  render() {
    return this.compile(template, { ...this.props });
  }
}
