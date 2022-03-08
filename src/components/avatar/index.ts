import "./avatar.scss";
import "./avatar.ts";

import Block from "../../utils/block";
// шаблонизатор
import template from "./avatar.hbs";

//описание переменных
interface ButtonProps {
  modifer: string,
  child?: string,
  events?: {
    click?: () => void
  }
}

export class Avatar extends Block {
  constructor(props: Props) {
    const events: Events = {
      click: (evt: any) => {
        this.openModal(evt);
      },
    };
    super({
      ...props,
      events,
    });
  }

  openModal(evt: Event): void {
    const avatarCircle: HTMLDivElement | null = document.querySelector(".avatar__circle")
    const modal: HTMLDivElement | null = document.querySelector(".modal")
    const modalClose: HTMLDivElement | null = document.querySelector(".modal__close")

    if (!avatarCircle || !modal || !modalClose) {
      throw new Error("нет полей");
    }

    const modalOpened = (evt:any):void => {
      evt.preventDefault
      modal.classList.add("modal--active")
    }
    const modalClosed = (evt:any):void => {
      evt.preventDefault
      modal.classList.remove("modal--active")
    }

    avatarCircle.addEventListener("click", modalOpened)
    modalClose.addEventListener("click", modalClosed)
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
