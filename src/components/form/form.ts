import Block from "../../utils/block";
import template from "./form.hbs";

import {verificationSubmitValues} from '../../utils/verificationSubmitValues';

interface Props {
  header?: string,
  inputLogin?: Block,
  inputName?: Block,
  inputMail?: Block,
  inputLastName?: Block,
  inputPhone?: Block,
  inputPassword?: Block,
  button?: Block,
  link?: string,
  footerText?: string
}

export default class Form extends Block {
  constructor(props: Props) {
    const events = {
      submit: (evt: Event) => {
        evt.preventDefault()
        this.validValues(evt.target, "pageSignIn");
      },
    };
    super({
      ...props,
      events,
    });
  }
  validValues(evt: Event, pageName: string | unknown): void {
    const result = verificationSubmitValues(evt, pageName);
    console.log(result);
  }
  render() {
    return this.compile(template, { ...this.props });
  }
}
