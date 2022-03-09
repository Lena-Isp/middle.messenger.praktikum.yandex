import Block from "../../utils/block";
import template from "./avatar.hbs";

interface Props {
  title: string
}

export default class Avatar extends Block {
  constructor(props: Props) {
    const events = {
      click: () => {
        this.openModal();
      },
    };
    super({
      ...props,
      events,
    });
  }

  openModal(): void {
    const avatarCircle: HTMLDivElement | null = document.querySelector(".avatar__circle")
    const modal: HTMLDivElement | null = document.querySelector(".modal")
    const modalClose: HTMLDivElement | null = document.querySelector(".modal__close")

    if (!avatarCircle || !modal || !modalClose) {
      throw new Error("нет полей");
    }

    const modalOpened = (evt:Event):void => {
      evt.preventDefault
      modal.classList.add("modal--active")
    }
    const modalClosed = (evt:Event):void => {
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
