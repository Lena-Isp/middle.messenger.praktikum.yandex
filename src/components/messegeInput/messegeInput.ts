import Block from "../../utils/block";
import template from "./messegeInput.hbs";

export default class MessegeInput extends Block {
  render() {
    return this.compile(template, { ...this.props });
  }
}
