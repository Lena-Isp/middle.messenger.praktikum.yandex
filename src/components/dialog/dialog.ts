import Block from "../../utils/block";
import template from "./dialog.hbs";

interface Props {
  name?: string,
  lead?: string,
  message?: string,
  classActive?: string
}

export default class Dialog extends Block {
  constructor(props: Props) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
