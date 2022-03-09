import "./modal.scss";

import Block from "../../utils/block";
import template from "./modal.hbs";

interface Props {
  child?: Block,
}

export default class Modal extends Block {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return this.compile(template, { ...this.props });
  }
}
