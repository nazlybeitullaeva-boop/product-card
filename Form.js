export default class Form {
  constructor(id) {
    this.element = document.querySelector('#' + id);
  }

  getValues() {
    const data = new FormData(this.element);
    return Object.fromEntries(data);
  }

  isValid() {
    return this.element.checkValidity();
  }

  reset() {
    this.element.reset();
  }
}