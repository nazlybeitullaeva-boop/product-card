const productCards = document.querySelectorAll('.card-container');
const changeColorAllCardsButton = document.querySelector('#change-color-all-cards-button');
const sageColorHash = '#7a8c6f';
const terracottaColorHash = '#a8703f';

changeColorAllCardsButton.addEventListener('click', () => {
  productCards.forEach((card) => {
    card.style.backgroundColor = sageColorHash;
  });
});

// Покраска первой карточки

const firstProductCard = document.querySelector('.card-container');
const changeColorFirstCardButton = document.querySelector('#change-color-first-card-button');

changeColorFirstCardButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = terracottaColorHash;
})

// Открыть google

const openGoogleButton = document.querySelector('#open-google-button');

openGoogleButton.addEventListener('click', openGoogle)

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?');

  if (answer === true) {
    window.open('https://google.com')
  } else {
    return;
  }
}

// Вывод консоль лог

const outputLogButton = document.querySelector('#output-console-log-button');

outputLogButton.addEventListener('click', () => outputConsoleLog('ДЗ №6'))

function outputConsoleLog(message) {
  alert(message)
  console.log(message)
}

const pageTitle = document.querySelector('.page-title');
pageTitle.addEventListener('mouseover', () => {
  console.log('pageTitle.textContent');
});

const toggleColorButton = document.querySelector('#toggle-color-button');

toggleColorButton.addEventListener('click', () => {
  toggleColorButton.classList.toggle('active');
});