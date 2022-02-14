const avatarCircle = document.querySelector(".avatar__circle")
const modal = document.querySelector(".modal")
const modalClose = document.querySelector(".modal__close")

const modalOpened = (evt) => {
  evt.preventDefault
  modal.classList.add("modal--active")
}
const modalClosed = (evt) => {
  evt.preventDefault
  modal.classList.remove("modal--active")
}

avatarCircle.addEventListener("click", modalOpened)
modalClose.addEventListener("click", modalClosed)