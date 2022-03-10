import Block from "../../utils/block";
import template from "./input.hbs";
import {validation} from '../../utils/validation';

interface Props {
  modifierClass?: string,
  title?: string,
  type?: string,
  name?: string,
  events?: {
    click?: () => void
  }
}

export default class Input extends Block {
  constructor(props: Props) {
    const events = {
      input: (evt: Event) => {
        this.checkInput(evt, this.props.type);
      },
      blur: (evt: Event) => {
        this.checkInput(evt, this.props.type);
      },
      focus: (evt: Event) => {
        this.clearErrors(evt);
      },
    };
    super({
      ...props,
      events,
    });
  }

  checkInput(evt: Event, type: string): void {
    const result = validation((evt.target as HTMLInputElement).value, type);
    const wrapError = (evt.target as HTMLInputElement).nextElementSibling
    if (wrapError) {
      wrapError.textContent = result?.messageError;
    }
  }

  clearErrors(evt: Event): void {
    const wrapError =(evt.target as HTMLInputElement).nextElementSibling
    if (wrapError) {
      wrapError.textContent = '';
    }
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
