import "./input.scss";

import Block from "../../utils/block";
// Ваш реализованный шаблонизатор
import template from "./input.hbs";

import {validation} from '../../utils/validation';

//описание переменных
interface InputProps {
  modifer: string,
  title: string,
  type: string,
  name: string,
  events?: {
    click?: () => void
  }
}

export class Input extends Block {
  constructor(props: Props) {
    const events: Events = {
      input: (evt: any) => {
        this.checkInput(evt, this.props.type);
      },
      focus: () => {
        this.clearErrors();
      },
    };
    super({
      ...props,
      events,
    });
  }

  checkInput(evt: Event, type: string): void {
    const result = validation((evt.target as HTMLInputElement).value, type);
    const wrapError = evt.target.nextElementSibling
    if (wrapError) {
      wrapError.textContent = result?.messageError;
    }
  }

  clearErrors(): void {
    if (wrapError) {
      wrapError.textContent = '';
    }
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
