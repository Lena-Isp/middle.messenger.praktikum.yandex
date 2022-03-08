//стили
import "./form.scss";

//общий файл
import Block from "../../utils/block";
import {verificationSubmitValues} from '../../utils/verificationSubmitValues';

//шаблон формы
import template from "./form.hbs";


export class TemplateForm extends Block {
  constructor(props: Props) {
    const events: Events = {
      submit: (evt: any) => {
        evt.preventDefault()
        console.log("xcvxv")
        this.validValues(evt.target, "pageSignIn");
      },
    };
    super({
      ...props,
      events,
    });
  }

  validValues(e: Event, pageName: string | unknown): void {
    const result = verificationSubmitValues(e, pageName);
    console.log(result);
}
  render() {
    return this.compile(template, { ...this.props });
  }
}
