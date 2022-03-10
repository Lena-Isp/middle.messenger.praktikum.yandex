import Block from "../../utils/block";
import template from "./back.hbs";

interface Props {
  link: string,
}

export default class Button extends Block {
  constructor(props: Props) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
