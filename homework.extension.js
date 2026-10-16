let userInfoExt =  {
  name: " Peter",
  lastName: "Parker",
  age: 25,
  city: "New York",
  isStudent: true,
  country: "Kazakhstan",
};

const productData = {
 name: 'Phone',
 price: 300000,
};


userInfoExt.age = 21;
productData.price = 250000;

console.log(userInfoExt.name);
console.log(userInfoExt.age);
console.log(productData.price);

function isStudent() { 
  const student = {
 name: 'Dana',
 score: 80,
 isPassed: score>= 60 ? "Зачёт" : "Не зачет"
  }
};

function isAdult() {
  const person = {
  ame: 'Aruzhan',
 age: 17
};

  const isEligible = age >= 18;
  if (isEligible) {
    console.log("Доступ разрешен");
    } else { 
    console.log("Доступ запрещён");
}};

const book = {
  title: "The nigth Circus",
  author: "Erin Morgenstern",
  pages: "512"
};

const car = {
 brand: 'Toyota',
 year: 2022,
 color: 'white'
};


const users = [
 { name1: 'Amina', age: 20 },
 { name2: 'Dana', age: 25 }
];

console.table(users[0]);
console.table(users[1])

const products = [
 { name: 'Phone', price: 250000 },
 { name: 'Laptop', price: 500000 },
 { name: 'Tablet', price: 200000 }
]

console.log(products[1])

const fruitsList = ['apple', 'banana', 'orange'];

fruitsList.forEach(function(fruit) {
console.table(fruit)
})

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
console.table(number)
})

const namesList = ['Amina', 'Dana', 'Aruzhan'];
namesList.forEach(function(name) {
  console.table(`Привет, ${name}`);
})

const numberLIst = [2, 4, 6];
const doubleNumbers = numbers.map(number => number * 2);

console.log(doubleNumbers);

function sayHello() {
console.log('Hello')
};
sayHello()

function showName() {
  console.log('Nazly')
}
showName()


function sum(a, b) {
  console.log(a + b);
}

sum(3, 5); 


function multiply(a, b) {
  return a * b;
}

console.log(multiply(4, 6)); 


function checkAge(age) {
  if (age >= 18) {
    console.log('Можно войти');
  } else {
    console.log('Нельзя войти');
  }
}

checkAge(20); 
checkAge(15); 

function greet(name) {
 console.log(`Привет, ${name} `);
}
greet('Nazly');
greet('Arzy');
greet('Yasmin');

function showNumber() {
 comsole.log(number)
}


const number = [1, 2, 3];



function showNumber(number) {
 console.log(`Число: ${number}`);
}
numbers.forEach(showNumber);

let names = ['Nazly', 'Arzy', 'Yasmin'];
function greet(name) {
 console.log(`Привет, ${name}`); 
}
names.forEach(greet); 

const title = document.getElementById('title'); // ищет по id
const button = document.getElementById('button');
const firstText = document.querySelector('.text');
const firstCard = document.querySelector('.card'); // Вернёт только первую найденную карточку
const allCards = document.querySelectorAll('.card'); // вернёт все элементы с классом card в виде NodeList.
const allTexts = document.getElementsByClassName('text');
const title2 = document.querySelector('.page-title');
const button2 = document.querySelector('#button'); /* принимает CSS-селектор (значит, там нужен # перед id, как в CSS). 
Он может искать по id, классу, тегу, атрибуту — по любому CSS-селектору */



const titleById = document.getElementById('title');

const titleBySelector = document.querySelector('#title');

// querySelector('#title') /* принимает CSS-селектор (значит, там нужен # перед id, как в CSS). 
//Он может искать по id, классу, тегу, атрибуту — по любому CSS-селектору */

/*
  querySelector и querySelectorAll — оба метода ищут элементы 
  на странице по CSS-селектору, но отличаются результатом:

  1. querySelector('.card')
     - возвращает только ОДИН элемент — первый найденный в DOM
     - если ничего не найдено — вернёт null
     - у результата НЕТ метода forEach, 
       так как это не список, а один конкретный элемент

  2. querySelectorAll('.card')
     - возвращает СПИСОК всех найденных элементов (NodeList)
     - если ничего не найдено — вернёт пустой список (не null)
     - у результата ЕСТЬ метод forEach,
       поэтому можно сразу перебирать все найденные элементы

  Пример:
  document.querySelector('.card')     -> первая карточка
  document.querySelectorAll('.card')  -> все карточки на странице
*/

/*
  document.getElementsByClassName('item') возвращает 
  "живую" (live) коллекцию HTMLCollection — 
  то есть список всех элементов с классом "item" */


const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  console.log(card);
});

cards.forEach((card) => {
  console.log(card.textContent);
});

cards.forEach((card) => {
  card.classList.add('active');
});

cards.forEach((card, index) => {
  if (index < 2) {
    card.classList.add('first');
  } else {
    card.classList.add('second');
  }
});

cards.forEach((card, index) => {
  if (index <= 5) {
    card.classList.add('group-one');
  } else {
    card.classList.add('group-two');
  }
});


 /* 74. Найдите ошибку.
const user = {
 name: 'Amina'
 age: 20
};  // не хватает запятой

75. Что неправильно? Что получится и почему?
const fruits = ['apple', 'banana', 'orange'];
console.log(fruits[3]); получится Indefinded потому что индексация начинается с 0

76. Что получится?
const user = {
 name: 'Amina',
 age: 20
};
console.log(user.city);  выйдет Indefinded

77. Если задача была вывести каждый отдельный элемент — что здесь не так?
const numbers = [1, 2, 3];
numbers.forEach((number) => {
 console.log(numbers); должно быть number
});

78. Найдите ошибку.
const cards = document.querySelector('.card');
cards.forEach((card) => {
 console.log(card); метод querySelector выводит только один элемент, а не коллекцию
});

79. Что нужно изменить, если карточек несколько? querySelectorAll

80. Найдите ошибку.
const title = document.getElementById('#title'); # - ошибка

81. Найдите ошибку, если card — это класс.
const card = document.querySelector('card'); Не хватает точки перед .card,
без нее браузер ищет тэг, а не класс.

82. Есть ли здесь ошибка? Если нет — объясните, что делает код.
const cards = document.querySelectorAll('.card');
cards.forEach((card, index) => {
 if (index <= 2) {
 card.classList.add('first');
 } else {
 card.classList.add('second');
 }
}); Код  проходит по каждой карточке и перебирает каждую, 
если идекс меньше или равен 2 вывести first, иначе second
*/

// 1. Находим все элементы с классом .product и кладём в productItems
const productItems = document.querySelectorAll('.product');

// 2. Перебираем каждый элемент: product — сам элемент, index — его номер (0, 1, 2, 3)
productItems.forEach((product, index) => {

  // 3. Выводим в консоль текст элемента (Phone, Laptop, Tablet, Mouse)
  console.log(product.textContent);

  // 4. Если номер меньше 2, то это первые два элемента (индексы 0 и 1)
  if (index < 2) {
    // 5. Добавляем им класс product--first
    product.classList.add('product--first');
  } else {
    // 6. Всем остальным (Tablet, Mouse) добавляем product--second
    product.classList.add('product--second');
  }
});


const goods = [
  { name: 'Phone', price: 300000 },
  { name: 'Laptop', price: 500000 },
  { name: 'Mouse', price: 15000 }
];

goods.forEach((item) => {
  console.log(item.name, item.price);

  if (item.price > 100000) {
    console.log('Дорогой товар');
  } else {
    console.log('Бюджетный товар');
  }
});