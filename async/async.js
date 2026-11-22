const savedUsers = localStorage.getItem('users');
const message = document.querySelector('#loading');

const usersContainer = document.querySelector('#users');
const renderUsers = (users) => {
  usersContainer.replaceChildren();
  users.forEach((user) => {
    const userElement = document.createElement('div');
    userElement.classList.add('card');
    const label = document.createElement('label');
    label.textContent = `${user.name} — ${user.email}`;
    userElement.appendChild(label);
    const actions = document.createElement('div');
    actions.className = 'users-actions';
    const addButton = (text, className, action) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = className;
      button.textContent = text;
      button.addEventListener('click', action);
      actions.appendChild(button);
    };
    addButton('Удалить', 'delete-button', () => {
      const currentUsers = JSON.parse(localStorage.getItem('users') || '[]');
      const remainingUsers = currentUsers.filter((item) => item.id !== user.id);
      localStorage.setItem('users', JSON.stringify(remainingUsers));
      renderUsers(remainingUsers);
    });
    userElement.appendChild(actions);
    usersContainer.appendChild(userElement);
  });
};

if (!savedUsers) {
  message.textContent = 'Данные загружаются';

  setTimeout(() => {
    fetch('user.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Не удалось загрузить пользователей');
        }
        return response.json();
      })
      .then((users) => {
        localStorage.setItem('users', JSON.stringify(users));
        renderUsers(users);
        message.classList.add('is-hidden');
      })
      .catch(() => {
        message.textContent = 'Ошибка при загрузке данных';
        message.classList.remove('is-hidden');
      });
  }, 2000);
} else {
  message.classList.add('is-hidden');
  const users = JSON.parse(savedUsers);
  renderUsers(users);
}
  

const deleteAllButton = document.querySelector('body > .users-actions > .delete-all-button');
const getAllButton = document.querySelector('body > .users-actions > .get-all-button');

deleteAllButton.addEventListener('click', () => {
  localStorage.setItem('users', '[]');
  usersContainer.innerHTML = '';
  message.classList.remove('is-hidden');
  message.textContent = 'Данные удалены';
});

getAllButton.addEventListener('click', () => {
  fetch('user.json')
    .then((response) => {
      if (!response.ok) throw new Error('Ошибка при загрузке данных');
      return response.json();
    })
    .then((users) => {
      if (usersContainer.children.length === users.length) {
        message.textContent = 'Все пользователи уже отображены';
        message.classList.remove('is-hidden');
      } else {
        localStorage.setItem('users', JSON.stringify(users));
        renderUsers(users);
        message.classList.add('is-hidden');
      }
    })
    .catch(() => {
      message.classList.remove('is-hidden');
      message.textContent = 'Ошибка при загрузке данных';
    });
});
