import Block from "../../utils/block";
import template from "./password-change.hbs";

import {verificationSubmitValues} from '../../utils/verificationSubmitValues';

interface Props {
  oldPassword?: Block,
  newPassword?: Block,
  repeatPassword?: Block,
  button?: Block,
}

export default class PasswordChange extends Block {
  constructor(props: Props) {
    const events = {
      submit: (evt: Event) => {
        evt.preventDefault()
        this.validValues(evt.target, "pagePasswordChange");
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
