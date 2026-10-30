import { Cafe } from './Cafe.js';
import { Coffee } from './Coffee.js';
import { Tea } from './Tea.js';
import { Lemonade } from './Lemonade.js';

const cafe = new Cafe('Уютное кафе', 'Симферополь');
const coffee = new Coffee('Latte', 5, 90, 'medium', 'arabica', 'oat');
const tea = new Tea('Зелёный чай', 3, 70, 'small', 'green', 'Китай');
const lemonade = new Lemonade('Лимонад', 2, 10, 'large', 'лимон, мята', 'yellow');

cafe.getInfo();
cafe.orderDrink(coffee);
coffee.getInfo();
lemonade.getInfo();
tea.getInfo();