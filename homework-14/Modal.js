export default class Modal {
  constructor(id) {
    this.element = document.querySelector('#' + id);
    this.handleClose = () => this.close()

  }

  static overlay = document.querySelector('#modal-overlay');

  open() {
    if (!this.isOpen()) {
      this.element.classList.add('modal-showed');
      Modal.overlay.classList.add('modal-showed');
      Modal.overlay.addEventListener('click', this.handleClose);  
    }
  }

  isOpen() {
    return this.element.classList.contains('modal-showed');
  }

  close() {
    if (this.isOpen()) {
      this.element.classList.remove('modal-showed');
      Modal.overlay.classList.remove('modal-showed');
      Modal.overlay.removeEventListener('click', this.handleClose);
    }
  }
}
