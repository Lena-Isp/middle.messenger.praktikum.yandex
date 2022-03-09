import Block from "../../utils/block";
import template from "./form-profile.hbs";

interface Props {
  avatar?: Block,
  inputMail?: Block,
  inputLogin?: Block,
  inputName?: Block,
  inputLastName?: Block,
  inputTel?: Block,
  oldPassword?: Block,
  modal?: Block
}

export default class FormProfile extends Block {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
