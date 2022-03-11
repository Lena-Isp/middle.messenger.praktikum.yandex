import Block from "../../utils/block";
import template from "./message.hbs";

interface Props {
  text?: string,
  textNext?: string,
  textSend?: string
}

export default class Message extends Block {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
