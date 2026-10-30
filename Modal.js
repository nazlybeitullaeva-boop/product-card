export default class Modal {
  constructor(id) {
    this.element = document.querySelector('#' + id);
    this.overlay = document.querySelector('#overlay');
    this.closeButton = this.element.querySelector('.modal__close');
    this.closeButton.addEventListener('click', () => {
      this.close();
    });
  }

  open() {
    if (!this.isOpen()) {
      this.element.classList.add('modal-showed');
      this.overlay.classList.add('modal-showed');
    }
  }

  isOpen() {
    return this.element.classList.contains('modal-showed');
  }

  close() {
    if (this.isOpen()) {
      this.element.classList.remove('modal-showed');
      this.overlay.classList.remove('modal-showed');
    }
  }
}
