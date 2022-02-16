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
