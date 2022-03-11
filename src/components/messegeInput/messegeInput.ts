import Block from "../../utils/block";
import template from "./messegeInput.hbs";

export default class MessegeInput extends Block {
  constructor(props: Props) {
    const events = {
      submit: (evt: Event) => {
        evt.preventDefault()
        console.log("MessegeInput:", evt.target.querySelector("textarea").value)
      },
    };
    super({
      ...props,
      events,
    });
  }
  render() {
    return this.compile(template, { ...this.props });
  }
}
