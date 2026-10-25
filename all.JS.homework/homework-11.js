let user;

const subscribeForm = document.querySelector('.footer__form');
const emailInput = document.querySelector('.footer__input');

function handleSubscribeSubmit(event) {
  event.preventDefault();
  const email = emailInput.value;
  console.log({ email: email });
}

subscribeForm.addEventListener('submit', handleSubscribeSubmit);

const registrationButton = document.querySelector('.registration-button');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeButton = document.querySelector('.modal__close');

function openModal() {
  modal.classList.add('modal-showed');
  overlay.classList.add('modal-showed');
}

registrationButton.addEventListener('click', openModal);

function closeModal() {
  modal.classList.remove('modal-showed');
  overlay.classList.remove('modal-showed');
}

closeButton.addEventListener('click', closeModal);

const registrationForm = document.querySelector('.modal__form');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirmPassword');
const firstNameInput = document.querySelector('#firstName');
const surNameInput = document.querySelector('#surName');
const birthDateInput = document.querySelector('#birthDate');
const loginInput = document.querySelector('#login');

function handleRegistrationSubmit(event) {
  event.preventDefault();
  if (!registrationForm.checkValidity()) {
    alert('Регистрация отклонена: проверьте поля формы');
    return;
  }

  if (passwordInput.value !== confirmPasswordInput.value) {
    alert('Пароли не совпадают');
    return;
  }

  console.log('Пароли совпадают');
  const newUser = {
    firstName: firstNameInput.value,
    surName: surNameInput.value,
    birthDate: birthDateInput.value,
    login: loginInput.value,
    password: passwordInput.value,
    confirmPassword: confirmPasswordInput.value,
    createdOn: new Date(),
  };
  user = newUser;
  console.log(user);
  closeModal();
}

registrationForm.addEventListener('submit', handleRegistrationSubmit);
