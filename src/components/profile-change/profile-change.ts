import Block from "../../utils/block";
import template from "./profile-change.hbs";

import {verificationSubmitValues} from '../../utils/verificationSubmitValues';

interface Props {
  inputMail?: Block,
  inputLogin?: Block,
  inputName?: Block,
  inputLastName?: Block,
  nameChat?: Block,
  inputTel?: Block,
  button?: Block
}

export default class ProfileChange extends Block {
  constructor(props: Props) {
    const events = {
      submit: (evt: Event) => {
        evt.preventDefault()
        this.validValues(evt.target, "profileSetting");
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
