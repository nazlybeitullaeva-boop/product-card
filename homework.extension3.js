const fruitBasketList = ['apple', 'banana', 'orange'];
fruitBasketList.forEach((fruitName) => {
  console.log(fruitName);
});

const doubleNumbersItems = [2, 4, 6, 8];
doubleNumbersItems.forEach((doubleNumber) => {
  console.log(doubleNumber * 2);
});

const greetingNameItems = ['Amina', 'Dana', 'Aruzhan'];
greetingNameItems.forEach((greetingName) => {
  console.log(`Привет, ${greetingName}`);
});

const rainbowColors = ['red', 'green', 'blue'];
rainbowColors.forEach((rainbowColor, rainbowIndex) => {
  console.log(rainbowIndex, rainbowColor);
});

const firstThreeNumbersList = [10, 20, 30, 40, 50];
firstThreeNumbersList.forEach((firstNumber, firstIndex) => {
  if (firstIndex < 3) {
    console.log(firstNumber);
  }
});

const visitorAges = [15, 18, 20, 16, 30];
visitorAges.forEach((visitorAge) => {
  if (visitorAge >= 18) {
    console.log('Совершеннолетний');
  } else {
    console.log('Несовершеннолетний');
  }
});

const shopProductsItem = [
  { name: 'Phone', price: 300000 },
  { name: 'Laptop', price: 500000 },
  { name: 'Mouse', price: 15000 }
];

shopProductsItem.forEach((firstProduct, productIndex) => {
  if (productIndex === 0) {
    console.log(`${firstProduct.name} - ${firstProduct.price}`);
  }
});

shopProductsItem.forEach((cheapProduct) => {
  if (cheapProduct.price < 100000) {
    console.log(cheapProduct);
  }
});

for (let zeroStep = 0; zeroStep < 5; zeroStep++) {
  console.log(zeroStep);
}

for (let oneStep = 1; oneStep <= 5; oneStep++) {
  console.log(oneStep);
}

for (let doubleStep = 2; doubleStep <= 10; doubleStep++) {
  console.log(doubleStep * 2);
}

for (let backStep = 5; backStep >= 1; backStep--) {
  console.log(backStep);
}

const fruitShelfItems = ['apple', 'banana', 'orange'];
for (let shelfIndex = 0; shelfIndex < fruitShelfItems.length; shelfIndex++) {
  console.log(fruitShelfItems[shelfIndex]);
}

const paletteColorList = ['red', 'green', 'blue'];
for (const [paletteIndex, paletteColor] of paletteColorList.entries()) {
  console.log(paletteIndex, paletteColor);
}

const sumNumbersList = [10, 20, 30, 40];
let totalSumResult = 0;
for (const sumNumber of sumNumbersList) {
  totalSumResult += sumNumber;
}
console.log(totalSumResult);

const thresholdNumbers = [3, 15, 7, 20, 25, 2];
let bigNumbersCount = 0;

for (let thresholdIndex = 0; thresholdIndex < thresholdNumbers.length; thresholdIndex++) {
  if (thresholdNumbers[thresholdIndex] > 10) {
    bigNumbersCount++;
  }
}

console.log(bigNumbersCount);

const stockProducts = [
  { name: 'Phone', isAvailable: true },
  { name: 'Laptop', isAvailable: false },
  { name: 'Mouse', isAvailable: true }
];

for (let stockIndex = 0; stockIndex < stockProducts.length; stockIndex++) {
  if (stockProducts[stockIndex].isAvailable) {
    console.log(stockProducts[stockIndex].name);
  }
}

const pageCards = document.querySelectorAll('.card');

for (let cardIndex = 0; cardIndex < pageCards.length; cardIndex++) {
  pageCards[cardIndex].classList.add('active');
}