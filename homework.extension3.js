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



// ================= Задания 19–53 (части 3–10) =================
// Каждое задание в своём блоке { }, чтобы имена не конфликтовали
// с переменными из других подключённых скриптов.

// ===== Часть 3. for или forEach? =====
// 19. Что выбрать:
// а) вывести каждый элемент — forEach: проще и короче, индекс и остановка не нужны.
// б) каждый второй элемент — for: шаг задаётся вручную (i += 2).
// в) обратный порядок — for: можно начать с конца (i = length - 1; i >= 0; i--).
// г) добавить класс каждой карточке — forEach: просто действие над каждым элементом.
// д) остановить перебор — for: внутри можно использовать break, а в forEach остановить нельзя.

// 20. forEach -> for
{
  const numbers = [1, 2, 3];
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
  }
}

// 21. for -> forEach
{
  const fruits = ['apple', 'banana', 'orange'];
  fruits.forEach((fruit) => {
    console.log(fruit);
  });
}

// ===== Часть 4. while =====
// 22. Выведет 0, 1, 2 (цикл идёт, пока i < 3).
{
  let i = 0;
  while (i < 3) {
    console.log(i);
    i++;
  }
}

// 23. Числа от 1 до 5
{
  let i = 1;
  while (i <= 5) {
    console.log(i);
    i++;
  }
}

// 24. Числа от 5 до 1
{
  let i = 5;
  while (i >= 1) {
    console.log(i);
    i--;
  }
}

// 25. Исправлено: внутри цикла не было count++, условие всегда оставалось true.
{
  let count = 0;
  while (count < 5) {
    console.log(count);
    count++;
  }
}

// 26. for удобен, когда известно число повторений: счётчик, условие и шаг записаны в одной строке.
// while удобнее, когда число повторений заранее неизвестно и цикл идёт, пока выполняется условие
// (например, пока пользователь не ввёл правильный пароль или пока не найден нужный элемент).

// ===== Часть 5. Область видимости =====
// 27. Будет ReferenceError: name is not defined. const name объявлена внутри блока if
// и снаружи блока не видна (блочная область видимости).

// 28. Ошибки не будет. city объявлена снаружи, а вложенный блок видит переменные внешней области.
{
  const city = 'Astana';
  if (true) {
    console.log(city); // Astana
  }
}

// 29. Выведется 10. Внутри if создаётся НОВАЯ переменная score (20), она существует только
// в блоке и затеняет внешнюю. Внешняя score остаётся 10.
{
  let score = 10;
  if (true) {
    let score = 20;
  }
  console.log(score); // 10
}

// 30. Выведется 20. Здесь нового let нет: присваивание меняет внешнюю переменную.
{
  let score = 10;
  if (true) {
    score = 20;
  }
  console.log(score); // 20
}

// 31. Цикл выведет 0, 1, 2, а console.log(i) после него даст ReferenceError:
// i объявлена через let в заголовке for и живёт только внутри цикла.

// 32. В примере 29 есть слово let внутри блока: создаётся новая переменная, внешняя не меняется.
// В примере 30 слова let нет: изменяется уже существующая внешняя переменная.

// 33. Внутри блока выведется 'Inside', снаружи — 'Outside' (разные переменные в разных областях).
{
  const message = 'Outside';
  if (true) {
    const message = 'Inside';
    console.log(message); // Inside
  }
  console.log(message); // Outside
}

// ===== Часть 6. map =====
// 34.
{
  const numbers = [1, 2, 3, 4];
  const doubled = numbers.map((number) => number * 2);
  console.log(doubled); // [2, 4, 6, 8]
}

// 35.
{
  const users = [
    { name: 'Amina', age: 20 },
    { name: 'Dana', age: 25 },
    { name: 'Aruzhan', age: 19 }
  ];
  const userNames = users.map((user) => user.name);
  console.log(userNames);
}

// 36.
{
  const products = [
    { name: 'Phone', price: 300000 },
    { name: 'Laptop', price: 500000 }
  ];
  const productLines = products.map((product) => `${product.name} - ${product.price}`);
  console.log(productLines);
}

// 37.
{
  const numbers = [5, 10, 15];
  const increased = numbers.map((number) => number + 10);
  console.log(increased); // [15, 20, 25]
}

// 38. Ошибка: в фигурных скобках нет return, поэтому колбэк возвращает undefined
// и результат — [undefined, undefined, undefined]. Выражение number * 2 вычисляется, но нигде не возвращается.
{
  const numbers = [1, 2, 3];
  const result = numbers.map((number) => {
    return number * 2;
  });
  console.log(result); // [2, 4, 6]
}

// ===== Часть 7. filter =====
// 39.
{
  const numbers = [5, 10, 15, 20, 3];
  console.log(numbers.filter((number) => number > 10)); // [15, 20]
}

// 40.
{
  const users = [
    { name: 'Amina', age: 17 },
    { name: 'Dana', age: 25 },
    { name: 'Ali', age: 16 },
    { name: 'Aruzhan', age: 20 }
  ];
  console.log(users.filter((user) => user.age >= 18));
}

// 41.
{
  const products = [
    { name: 'Phone', isAvailable: true },
    { name: 'Laptop', isAvailable: false },
    { name: 'Mouse', isAvailable: true }
  ];
  console.log(products.filter((product) => product.isAvailable));
}

// 42.
{
  const products = [
    { name: 'Phone', price: 300000 },
    { name: 'Laptop', price: 500000 },
    { name: 'Mouse', price: 15000 }
  ];
  console.log(products.filter((product) => product.price > 100000));
}

// 43. map нужен, когда требуется преобразовать КАЖДЫЙ элемент и получить массив той же длины
// (здесь каждое число умножается на 2). filter только отбирает элементы по условию и
// не изменяет их, а длина результата может стать меньше.

// ===== Часть 8. map + filter =====
// 44.
{
  const numbers = [5, 10, 15, 20, 25];
  const result = numbers.filter((number) => number > 10).map((number) => number * 2);
  console.log(result); // [30, 40, 50]
}

// 45.
{
  const products = [
    { name: 'Phone', isAvailable: true },
    { name: 'Laptop', isAvailable: false },
    { name: 'Mouse', isAvailable: true }
  ];
  const names = products.filter((product) => product.isAvailable).map((product) => product.name);
  console.log(names); // ['Phone', 'Mouse']
}

// 46.
{
  const users = [
    { name: 'Amina', age: 17 },
    { name: 'Dana', age: 25 },
    { name: 'Ali', age: 16 },
    { name: 'Aruzhan', age: 20 }
  ];
  const names = users.filter((user) => user.age >= 18).map((user) => user.name);
  console.log(names); // ['Dana', 'Aruzhan']
}

// ===== Часть 9. Code review =====
// 47. Логическая ошибка: выводится весь массив numbers, а не текущий элемент number.
// Результат — три раза [1, 2, 3]. Исправление:
{
  const numbers = [1, 2, 3];
  numbers.forEach((number) => {
    console.log(number);
  });
}

// 48. filter не преобразует элементы, а оставляет те, для которых колбэк вернул истинное значение.
// number * 2 всегда truthy, поэтому filter вернёт исходный массив [1, 2, 3], причём результат
// ещё и не используется. Для удвоения нужен map:
{
  const numbers = [1, 2, 3];
  const result = numbers.map((number) => number * 2);
  console.log(result); // [2, 4, 6]
}

// 49. ReferenceError: message is not defined. const message объявлена внутри блока тела цикла
// и снаружи недоступна. Исправление: объявить переменную снаружи.
{
  let message;
  for (let i = 0; i < 3; i++) {
    message = 'Hello';
  }
  console.log(message);
}

// 50. Условие i <= numbers.length неверно: последний индекс равен length - 1.
// При i = 3 выводится numbers[3] — undefined. Правильно i < numbers.length:
{
  const numbers = [10, 20, 30];
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
  }
}

// 51. i никогда не увеличивается, условие i < 5 всегда true — бесконечный цикл, который
// зависнет вкладку браузера. Нужно добавить i++ внутри цикла:
{
  let i = 0;
  while (i < 5) {
    console.log(i);
    i++;
  }
}

// 52. map возвращает массив true/false (по одному на товар), а не сами товары.
// Для отбора нужен filter:
{
  const products = [
    { name: 'Phone', isAvailable: true },
    { name: 'Laptop', isAvailable: false }
  ];
  const result = products.filter((product) => product.isAvailable);
  console.log(result); // [{ name: 'Phone', isAvailable: true }]
}

// ===== Часть 10. Итоговая задача =====
// 53.
{
  const products = [
    { name: 'Phone', price: 300000, isAvailable: true },
    { name: 'Laptop', price: 500000, isAvailable: false },
    { name: 'Mouse', price: 15000, isAvailable: true },
    { name: 'Tablet', price: 200000, isAvailable: true }
  ];

  // а)
  products.forEach((product) => {
    console.log(product.name);
  });

  // б)
  for (let i = 0; i < products.length; i++) {
    console.log(i, products[i].name);
  }

  // в)
  const availableProducts = products.filter((product) => product.isAvailable);
  console.log(availableProducts);

  // г)
  const expensiveProducts = products.filter((product) => product.price > 100000);
  console.log(expensiveProducts);

  // д)
  const productNames = products.map((product) => product.name);
  console.log(productNames);

  // е)
  const availableNames = products
    .filter((product) => product.isAvailable)
    .map((product) => product.name);
  console.log(availableNames); // ['Phone', 'Mouse', 'Tablet']

  // ж) forEach ничего не возвращает (undefined): просто выполняет действие для каждого элемента.
  // map возвращает новый массив той же длины, где каждый элемент преобразован.
  // filter возвращает новый массив только с теми элементами, для которых условие истинно.
}
