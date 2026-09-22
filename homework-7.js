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

function setTemperature(city, temperature) {
  console.log(`В ${city} сейчас ${temperature}℃.`);

}
setTemperature("Дублине", 18);
const SPEED_OF_LIGHT = 299792458;

function checkSpeed(speed) { 
  if (speed > SPEED_OF_LIGHT) {
    console.log('Сверхсветовая скорость');
  } else if (speed < SPEED_OF_LIGHT) {
    console.log('Субсветовая скорость');
  } else {
    console.log('Световая скорость');
}}

checkSpeed(299792458);
checkSpeed(300000000);
checkSpeed(100000);

let productPrice = [
  2070,
  3500,
  1650,
  4750,
  7520
];

let productName = [
  "Увлажняющий мусс" ,
  "Увлажняющая маска" ,
  "Гель для умывания" ,
  "Подарочный набор №1" ,
 "Подарочный набор №2"
];

 console.log(productName[0], productPrice[0]);
 console.log(productName[1], productPrice[1]);
 console.log(productName[2], productPrice[2]);
 console.log(productName[3], productPrice[3]);
 console.log(productName[4], productPrice[4]);
;

function isHuman(userAnswer) {
  const num1 = 3;
  const name2 = 5;
  const correctAnswer = num1 + name2;
  
  if (userAnswer === correctAnswer) {
    console.log(' Проверка пройдена: вы человек');
  } else {
    console.log(' Проверка не пройдена');
  }
}

isHuman(8);
isHuman(10);






