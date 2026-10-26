const feedbackForm = document.querySelector('.feedback-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const passwordForm = document.querySelector('.password-form');
const newPasswordInput = document.querySelector('#newPassword');
const repeatPasswordInput = document.querySelector('#repeatPassword');

function handleFeedbackSubmit(event) {
  event.preventDefault();
  const feedback = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(feedback);
}

feedbackForm.addEventListener('submit', handleFeedbackSubmit);

function handlePasswordSubmit(event) { 
  event.preventDefault(); 

  if (newPasswordInput.value !== repeatPasswordInput.value) {
    alert('Пароли не совпадают');
    return;
  }

  console.log('Пароль успешно изменён');
}

passwordForm.addEventListener('submit',handlePasswordSubmit); 

const profileForm = document.querySelector('.profile-form');

function handleProfileSubmit(event) {
  event.preventDefault();
  const formData = new FormData(profileForm);
  const profile = Object.fromEntries(formData);
  console.log(profile);
}

profileForm.addEventListener('submit', handleProfileSubmit);

const registrationForm = document.querySelector('.register-form');

function handleRegisterSubmit(event) {

  event.preventDefault();


  const formData = new FormData(registrationForm);


  const user = Object.fromEntries(formData);


  if (user.password !== user.repeatPassword) {
    alert('Пароли не совпадают');
    return;
  }


  delete user.password;
  delete user.repeatPassword;

  user.createdOn = new Date();

  console.log(user);
}

registrationForm.addEventListener('submit', handleRegisterSubmit);


const eventButton = document.querySelector('.event-button');
const eventModal = document.querySelector('.event-modal');
const eventOverlay = document.querySelector('.event-overlay');
const eventCloseButton = eventModal.querySelector('.modal__close');
const eventForm = document.querySelector('.event-form');

function openEventModal() {
  eventModal.classList.add('modal-showed');
  eventOverlay.classList.add('modal-showed');
}

function closeEventModal() {
  eventModal.classList.remove('modal-showed');
  eventOverlay.classList.remove('modal-showed');
}

eventButton.addEventListener('click', openEventModal);
eventCloseButton.addEventListener('click', closeEventModal);
eventOverlay.addEventListener('click', closeEventModal);

function handleEventSubmit(event) {
  // 1. не перезагружаем страницу
  event.preventDefault();

  // 2. собираем данные формы в объект
  const formData = new FormData(eventForm);
  const user = Object.fromEntries(formData);

  // 3. проверяем пароли
  if (user.password !== user.repeatPassword) {
    alert('Пароли не совпадают');
    return;
  }


  delete user.password;
  delete user.repeatPassword;


  user.createdOn = new Date();

  console.log(user);

  // 7. очищаем форму
  eventForm.reset();


  closeEventModal();
}

eventForm.addEventListener('submit', handleEventSubmit);

// ===== 5. Заявка в модалке =====
const requestButton = document.querySelector('.request-button');
const requestModal = document.querySelector('.request-modal');
const requestOverlay = document.querySelector('.request-overlay');
const requestCloseButton = requestModal.querySelector('.modal__close');
const requestForm = document.querySelector('.request-form');

function openRequestModal() {
  requestModal.classList.add('modal-showed');
  requestOverlay.classList.add('modal-showed');
}

function closeRequestModal() {
  requestModal.classList.remove('modal-showed');
  requestOverlay.classList.remove('modal-showed');
}

function handleRequestSubmit(event) {
  event.preventDefault();
  const formData = new FormData(requestForm);
  const request = Object.fromEntries(formData);
  console.log(request);
  requestForm.reset();
  closeRequestModal();
}

requestButton.addEventListener('click', openRequestModal);
requestCloseButton.addEventListener('click', closeRequestModal);
requestOverlay.addEventListener('click', closeRequestModal);
requestForm.addEventListener('submit', handleRequestSubmit);
