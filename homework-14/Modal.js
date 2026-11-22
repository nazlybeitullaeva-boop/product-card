export default class Modal {
  constructor(id, shouldCloseOnOverlay = true) {
  this.element = document.querySelector('#' + id);
  this.shouldCloseOnOverlay = shouldCloseOnOverlay;
   if (!this.element) {
    throw new Error('Модальное окно с id "' + id + '" не найдено');
    }
    this.overlay = document.querySelector('#overlay');
    if (!this.overlay) {
    throw new Error('Overlay не найден');
      }
      this.closeButton = this.element.querySelector('.modal__close');
      if (!this.closeButton) {
    throw new Error('Кнопка закрытия модального окна с id "' + id + '" не найдена');
    }
    this.closeButton.addEventListener('click', () => {
    this.close();
    });
    this.handleClick = (event) => {
      if (event.target === this.overlay) {
    this.close();
      }
    };
  }

  open() {
    if (!this.isOpen()) {
      this.element.classList.add('modal-showed');
      this.overlay.classList.add('modal-showed');
    if (this.shouldCloseOnOverlay) {  
      this.overlay.addEventListener('click', this.handleClick);
    }
  }
  }

  isOpen() {
    return this.element.classList.contains('modal-showed');
  }

  close() {
    if (this.isOpen()) {
      this.element.classList.remove('modal-showed');
      this.overlay.classList.remove('modal-showed');
      this.overlay.removeEventListener('click', this.handleClick);
    }
  }
}
