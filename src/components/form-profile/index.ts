//стили
import "../form/form.scss";

//общий файл
import Block from "../../utils/block";

//шаблон формы
import template from "./form-profile.hbs";


export class TemplateFormfg extends Block {
  render() {
    return this.compile(template, { ...this.props });
  }
}
