import "./file-load.scss";

import Block from "../../utils/block";
import Button from "../button";
import template from "./file-load.hbs";

interface Props {
  button?: Block
}

export default class FileLoad extends Block {
  constructor(props: Props) {
    const element = {
      button: new Button({
        text: "загрузить",
      })
    }
    super({
      ...props,
      ...element,
    });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
