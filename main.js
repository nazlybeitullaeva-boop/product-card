const productCards = document.querySelectorAll('.card-container');
const changeColorAllCardsButton = document.querySelector('#change-color-all-cards-buttonп');
const blueColorHash = 'lightblue';
const pinkColorHash = 'pink';

changeColorAllCardsButton.addEventListener('click', () => {
  productCards.forEach((card) => {
    card.style.backgroundColor = blueColorHash;
  });
});

// Покраска первой карточки

const firstProductCard = document.querySelector('.card-container');
const changeColorFirstCardButton = document.querySelector('#change-color-first-card-button');

changeColorFirstCardButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = pinkColorHash;
})

// Открыть google

const openGoogleButton = document.querySelector('#open-google');

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

const outputLogButton = document.querySelector('#output-console-log');

outputLogButton.addEventListener('click', () => outputConsoleLog('ДЗ №6'))

function outputConsoleLog(message) {
  alert(message)
  console.log(message)
}