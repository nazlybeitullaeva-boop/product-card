 class Product  {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  getInfo() {
    console.log(`Product: ${this.name}, Price: ${this.price}`);
}}

const product = new Product('Lipstick', 20);
const product2 = new Product('Cream', 30);
product.getInfo();
product2.getInfo();

class Counter {
  constructor() {
    this.value = 0;
  }
  increment() {
    this.value++;
  }
  getValue() {
    console.log(`Counter value: ${this.value}`);
    
  }
}

const counter1 = new Counter();
const counter2 = new Counter();

counter1.increment();
counter1.increment();
counter2.increment();

counter1.getValue();
counter2.getValue();

class Lamp {
  constructor() {
    this.isOn = false;
  }
  turnOn() {
    this.isOn = true;
  }
  turnOff() {
    this.isOn = false;
  }
  isLampOn() {
    console.log(`Lamp is ${this.isOn ? 'on' : 'off'}`);
  }
}

const lamp = new Lamp();
console.log(lamp.isLampOn());
lamp.turnOn();
console.log(lamp.isLampOn());
lamp.turnOff();
console.log(lamp.isLampOn());

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
  setTitle(newTitle) {
    this.title = newTitle;
  }
  getInfo() {
    console.log(`Book: ${this.title}, Author: ${this.author}`);
  }
}
const book = new Book('1984', 'George Orwell');
book.getInfo();

book.setTitle('Скотный двор');
book.getInfo();

console.log(book.title);
console.log(book.author);