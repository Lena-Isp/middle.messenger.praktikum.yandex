import Block from "../../utils/block";
import template from "./chat.hbs";
interface Props {
  nameTop: string,
  dialog: Block,
  dialogChat: Block,
  message: Block,
  messegeInput: Block
}

export default class Chat extends Block {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return this.compile(template, { ...this.props });
  }
}
