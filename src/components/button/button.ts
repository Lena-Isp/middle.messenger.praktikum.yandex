import Block from "../../utils/block";
import template from "./button.hbs";

interface Props {
  text: string,
  modifierClass?: string
}

export default class Button extends Block {
  constructor(props: Props) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
