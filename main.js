import Modal from './Modal.js';
import Form from './Form.js';
import Product from './Product.js';
import Lipstick from './Lipstick.js';
import Cream from './Cream.js';
  

const modal = new Modal('modal');
const loginModalInstance = new Modal('login-modal');
const loginFormInstance = new Form('login-form');
const registerButton = document.querySelector('#registration-button');
const loginButton = document.querySelector('#login-button');

registerButton.addEventListener('click', () => {
  modal.open();
});

loginButton.addEventListener('click', () => {
  loginModalInstance.open();
});

const registrationForm = new Form('modal-form');
const registrationFormElement = document.querySelector('#modal-form');

registrationFormElement.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!registrationForm.isValid()) {
    alert('Проверьте поля формы');
    return;
  }

  const values = registrationForm.getValues();

  if (values.password !== values.confirmPassword) {
    alert('Пароли не совпадают');
    return;
  }

  console.log(values);
  registrationForm.reset();
  modal.close();
});


const footerForm = new Form('footer-form');
const footerFormElement = document.querySelector('#footer-form');

footerFormElement.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(footerForm.getValues());
});

const lipstick = new Lipstick('Lipstick', 'A beautiful lipstick', 20, 'Wax, Pigments', 'Red');
console.log(lipstick);
const cream = new Cream('Cream', 'A nourishing cream', 30, 'Water, Oils', 'Dry Skin');
console.log(cream);






