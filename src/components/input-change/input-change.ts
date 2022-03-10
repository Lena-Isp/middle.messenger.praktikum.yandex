import Block from "../../utils/block";
import template from "./input-change.hbs";

interface Props {
  modifierClass?: string,
  title?: string,
  type?: string,
  placeholder?: string,
  name?: string
}

export default class InputChange extends Block {
  constructor(props: Props) {
    super({
      ...props,
    });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
