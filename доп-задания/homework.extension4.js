// Страница для заданий: homework.extension4.html
// Каждое задание в своём блоке { }, чтобы имена не конфликтовали.

// ===== Часть 1. Функции - база =====
// 1.
{
  function sayHello() {
    console.log('Hello!');
  }
  sayHello();
}

// 2.
{
  function greet(name) {
    console.log(`Привет, ${name}!`);
  }
  greet('Amina');
  greet('Dana');
  greet('Aruzhan');
}

// 3.
{
  function sum(a, b) {
    return a + b;
  }
  console.log(sum(2, 3)); // 5
}

// 4.
{
  function multiply(a, b) {
    return a * b;
  }
  console.log(multiply(4, 5)); // 20
}

// 5.
{
  function formatPrice(price) {
    return `${price} ₸`;
  }
  console.log(formatPrice(300000)); // 300000 ₸
}

// 6.
{
  function checkAge(age) {
    if (age >= 18) {
      return 'Доступ разрешён';
    }
    return 'Доступ запрещён';
  }
  console.log(checkAge(20));
  console.log(checkAge(15));
}

// 7.
{
  function greet(name = 'Гость') {
    console.log(`Привет, ${name}!`);
  }
  greet('Amina'); // Привет, Amina!
  greet(); // Привет, Гость!
}

// 8. Параметр — это имя переменной в скобках при создании функции (то, что функция ждёт).
// Аргумент — это реальное значение, которое мы передаём при вызове.
{
  function square(number) { // number — параметр
    return number * number;
  }
  console.log(square(4)); // 4 — аргумент, результат 16
}

// ===== Часть 2. Виды функций =====
// 9. Function Expression
{
  const showMessage = function () {
    console.log('Hello');
  };
  showMessage();
}

// 10. Arrow Function
{
  const showMessage = () => {
    console.log('Hello');
  };
  showMessage();
}

// 11. Короткая стрелочная функция с неявным return
{
  const double = (number) => number * 2;
  console.log(double(5)); // 10
}

// 12. Всё сработает и выведет Hello. Function Declaration "поднимается" (hoisting):
// JS запоминает такие функции ещё до выполнения кода, поэтому их можно вызвать до объявления.

// 13. Будет ReferenceError: Cannot access 'sayHello' before initialization.
// const (как и let) нельзя использовать до строки, где она объявлена,
// а Function Expression лежит в const. Вызывать нужно после объявления.

// 14. Три одинаковые по логике функции
{
  function sumDeclaration(a, b) {
    return a + b;
  }
  const sumExpression = function (a, b) {
    return a + b;
  };
  const sumArrow = (a, b) => a + b;
  console.log(sumDeclaration(1, 2), sumExpression(1, 2), sumArrow(1, 2)); // 3 3 3
}

// ===== Часть 3. return и область видимости функции =====
// 15. Выведется 5, а потом undefined. Функция сама печатает сумму через console.log,
// но ничего не возвращает (нет return), поэтому result равен undefined.

// 16. Исправлено: вместо console.log используем return.
{
  function sum(a, b) {
    return a + b;
  }
  const result = sum(2, 3);
  console.log(result); // 5
}

// 17. Выведется Inside, затем Outside. Внутри функции своя const message,
// она не влияет на внешнюю. Это две разные переменные.
{
  const message = 'Outside';
  function showMessage() {
    const message = 'Inside';
    console.log(message);
  }
  showMessage();
  console.log(message);
}

// 18. Проблема: user создан внутри функции и снаружи не виден, поэтому будет ReferenceError.
// К тому же createUser даже не вызвана и ничего не возвращает.

// 19. Возвращаем объект через return и сохраняем снаружи.
{
  function createUser() {
    const user = {
      name: 'Amina',
      age: 20
    };
    return user;
  }
  const newUser = createUser();
  console.log(newUser);
}

// ===== Часть 4. Callback-функции =====
// 20. Мы передаём саму функцию, чтобы forEach вызвал её сам для каждого элемента.
// Скобки () означают "вызвать сейчас", а нам нужно отдать функцию, а не её результат.
{
  const numbers = [1, 2, 3];
  function showNumber(number) {
    console.log(number);
  }
  numbers.forEach(showNumber);
}

// 21. С круглыми скобками showNumber() вызывается сразу, без аргумента (выведет undefined),
// а в forEach попадает её результат — undefined. Затем forEach выдаст ошибку:
// undefined is not a function. Правильно: numbers.forEach(showNumber).

// 22.
{
  const products = [
    { name: 'Phone', price: 300000 },
    { name: 'Laptop', price: 500000 },
    { name: 'Mouse', price: 15000 }
  ];

  function showProductName(product) {
    console.log(product.name);
  }
  products.forEach(showProductName);

  // 23.
  function getProductName(product) {
    return product.name;
  }
  console.log(products.map(getProductName)); // ['Phone', 'Laptop', 'Mouse']

  // 24.
  function isExpensive(product) {
    return product.price > 100000;
  }
  console.log(products.filter(isExpensive)); // Phone и Laptop
}

// ===== Часть 5. map, filter и функции =====
// 25.
{
  const prices = [1000, 2000, 5000];
  const increasedPrices = prices.map((price) => price * 1.1);
  console.log(increasedPrices); // [1100, 2200, 5500] (возможны дробные хвосты из-за float)
}

// 26.
{
  const users = [
    { name: 'Amina', age: 17 },
    { name: 'Dana', age: 25 },
    { name: 'Ali', age: 16 },
    { name: 'Aruzhan', age: 20 }
  ];
  console.log(users.filter((user) => user.age >= 18));
}

// 27.
{
  const products = [
    { name: 'Phone', price: 300000, isAvailable: true },
    { name: 'Laptop', price: 500000, isAvailable: false },
    { name: 'Mouse', price: 15000, isAvailable: true }
  ];
  const names = products
    .filter((product) => product.isAvailable)
    .map((product) => product.name);
  console.log(names); // ['Phone', 'Mouse']
}

// 28. Использован map вместо filter: он вернёт массив [true, true, false] (по одному значению
// на товар), а не сами товары. Нужно filter:
{
  const products = [
    { name: 'Phone', price: 300000 },
    { name: 'Laptop', price: 500000 },
    { name: 'Mouse', price: 15000 }
  ];
  const result = products.filter((product) => product.price > 100000);
  console.log(result);
}

// 29. Внутри { } нет return, поэтому колбэк возвращает undefined: result = [undefined, undefined, undefined].
{
  const numbers = [1, 2, 3];
  const result = numbers.map((number) => {
    return number * 2;
  });
  console.log(result); // [2, 4, 6]
}

// 30. На одном массиве map вернёт массив той же длины, где каждый элемент преобразован,
// а filter вернёт массив, в котором остались только подходящие элементы (элементы не меняются).
// Например, [1, 2, 3, 4]: map(n => n * 2) -> [2, 4, 6, 8]; filter(n => n > 2) -> [3, 4].

// ===== Часть 6. addEventListener - база =====
// Все элементы находятся в homework.extension4.html
{
  const title = document.querySelector('.title');
  const nameInput = document.querySelector('.name-input');
  const showButton = document.querySelector('.show-button');
  const colorButton = document.querySelector('.color-button');
  const googleLink = document.querySelector('.google-link');
  const form = document.querySelector('.form');
  const emailInput = document.querySelector('.email-input');

  // 31.
  showButton.addEventListener('click', () => {
    console.log('Кнопка нажата');
  });

  // 32.
  function showMessage() {
    console.log('Кнопка нажата (через функцию showMessage)');
  }
  showButton.addEventListener('click', showMessage);

  // 33. Правильный первый вариант: showMessage — передаём саму функцию, браузер вызовет её при клике.
  // Во втором варианте showMessage() вызывается сразу при загрузке страницы,
  // а в addEventListener попадает её результат (undefined), поэтому клик ничего не делает.
  // (В задании 57 есть исправленная версия.)

  // 34.
  colorButton.addEventListener('click', () => {
    colorButton.classList.toggle('active');
  });

  // 35.
  title.addEventListener('mouseover', () => {
    console.log(title.textContent);
  });

  // 36.
  title.addEventListener('mouseleave', () => {
    console.log('Курсор ушёл');
  });

  // 37.
  nameInput.addEventListener('input', () => {
    console.log(nameInput.value);
  });

  // 38.
  nameInput.addEventListener('input', (event) => {
    console.log('event.target.value:', event.target.value);
  });

  // ===== Часть 7. event и preventDefault =====
  // 39. event — объект с информацией о событии: тип (type), элемент, на котором оно произошло (target),
  // координаты мыши, нажатая клавиша, метод preventDefault() и др.
  showButton.addEventListener('click', (event) => {
    console.log(event);

    // 40. event.target — элемент, по которому кликнули (здесь <button class="show-button">)
    console.log(event.target);
  });

  // 41.
  googleLink.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Переход отменён');
  });

  // 42 + 43.
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(emailInput.value);
  });

  // 44. preventDefault отменяет только стандартное поведение браузера: переход по ссылке,
  // отправку формы с перезагрузкой страницы. Наш JS-код при этом выполняется как обычно.

  // ===== Часть 8. Функции + события =====
  // 45.
  function showInputValue() {
    console.log(nameInput.value);
  }
  showButton.addEventListener('click', showInputValue);

  // 46.
  function getInputValue() {
    return nameInput.value;
  }
  showButton.addEventListener('click', () => {
    const value = getInputValue();
    console.log(value);
  });

  // 47.
  function isInputEmpty(value) {
    return value.trim() === '';
  }
  showButton.addEventListener('click', () => {
    const value = nameInput.value;
    if (isInputEmpty(value)) {
      console.log('Введите имя');
    } else {
      console.log(value);
    }
  });

  // 48.
  function toggleButton(button) {
    button.classList.toggle('active');
  }
  const toggleButtonElement = document.querySelector('.toggle-button');
  toggleButtonElement.addEventListener('click', () => {
    toggleButton(toggleButtonElement);
  });
}

// 49. Клик по карточке добавляет selected только ей (через переменную card).
{
  const cards = document.querySelectorAll('.card');
  cards.forEach((card) => {
    card.addEventListener('click', () => {
      card.classList.add('selected');
    });
  });
}

// 50. То же, но через event.target
{
  const cards = document.querySelectorAll('.card');
  cards.forEach((card) => {
    card.addEventListener('click', (event) => {
      event.target.classList.add('selected');
    });
  });
}

// ===== Часть 9. Задачи чуть сложнее =====
const productsList = [
  { name: 'Phone', price: 300000, isAvailable: true },
  { name: 'Laptop', price: 500000, isAvailable: false },
  { name: 'Mouse', price: 15000, isAvailable: true },
  { name: 'Tablet', price: 200000, isAvailable: true }
];

// 51.
productsList
  .filter((product) => product.isAvailable)
  .map((product) => product.name)
  .forEach((name) => {
    console.log(name);
  });

// 52.
function getAvailableProductNames(products) {
  return products
    .filter((product) => product.isAvailable)
    .map((product) => product.name);
}
console.log(getAvailableProductNames(productsList)); // ['Phone', 'Mouse', 'Tablet']

// 53.
function getExpensiveProducts(products, minPrice) {
  return products.filter((product) => product.price > minPrice);
}

// 54.
{
  const expensiveButton = document.querySelector('.expensive-button');
  expensiveButton.addEventListener('click', () => {
    console.log(getExpensiveProducts(productsList, 100000));
  });
}

// 55 + 56. input.value — строка, поэтому переводим в число через Number().
{
  const priceInput = document.querySelector('.price-input');
  const priceButton = document.querySelector('.price-button');

  priceButton.addEventListener('click', () => {
    if (priceInput.value.trim() === '') {
      console.log('Ошибка: введите минимальную цену');
      return;
    }
    const minPrice = Number(priceInput.value);
    console.log(getExpensiveProducts(productsList, minPrice));
  });
}

// ===== Часть 10. Code review =====
// 57. Ошибка: showMessage() вызывается сразу при добавлении обработчика, а в addEventListener
// попадает undefined, поэтому на клик ничего не происходит. Нужно передать функцию без скобок.
// (Ещё нужно, чтобы элемент .button существовал, иначе button будет null.)
{
  const button = document.querySelector('.show-button');
  function showMessage() {
    console.log('Hello');
  }
  button.addEventListener('click', showMessage);
}

// 58. Нет return в теле стрелочной функции с { }, поэтому map возвращает [undefined, undefined, undefined].
{
  const numbers = [1, 2, 3];
  const result = numbers.map((number) => number * 2);
  console.log(result); // [2, 4, 6]
}

// 59. Нужно filter, а не map: map вернёт массив true/false, а не пользователей.
{
  const users = [
    { name: 'Amina', age: 17 },
    { name: 'Dana', age: 25 }
  ];
  const adults = users.filter((user) => user.age >= 18);
  console.log(adults);
}

// 60. Будет ReferenceError: name is not defined. const name создана внутри функции и снаружи
// не видна. (Если нужен результат, функцию надо дополнить return.)

// 61. Две проблемы:
// 1) message объявлена внутри колбэка, поэтому console.log(message) снаружи даст ReferenceError;
// 2) console.log стоит сразу при загрузке страницы, а не внутри обработчика клика
//    (клика ещё не было, и колбэк не выполнялся).
// Исправление: выводим внутри обработчика.
{
  const saveButton = document.querySelector('.save-button');
  saveButton.addEventListener('click', () => {
    const message = 'Saved';
    console.log(message);
  });
}

// 62. Логичнее использовать map: он сам создаёт новый массив, не нужен пустой массив и push.
{
  const numbers = [1, 2, 3];
  const doubled = numbers.map((number) => number * 2);
  console.log(doubled);
}

// ===== Часть 11. Итоговая мини-задача =====
{
  const products = [
    { name: 'Phone', price: 300000, isAvailable: true },
    { name: 'Laptop', price: 500000, isAvailable: false },
    { name: 'Mouse', price: 15000, isAvailable: true },
    { name: 'Tablet', price: 200000, isAvailable: true }
  ];

  const minPriceInput = document.querySelector('.min-price-input');
  const showProductsButton = document.querySelector('.show-products-button');

  // Логика фильтрации в отдельной функции: доступные товары дороже minPrice -> массив названий
  function getAvailableNamesAbovePrice(items, minPrice) {
    return items
      .filter((product) => product.isAvailable && product.price > minPrice)
      .map((product) => product.name);
  }

  // Обработчик клика в отдельной функции
  function handleShowProductsClick() {
    const value = minPriceInput.value;
    if (value.trim() === '') {
      console.log('Введите минимальную цену');
      return;
    }
    const minPrice = Number(value);
    console.log(getAvailableNamesAbovePrice(products, minPrice));
  }

  showProductsButton.addEventListener('click', handleShowProductsClick);
}
