import { Drink } from './Drink.js';

export class Coffee extends Drink {
  constructor(name, price, temperature, size, beans, milk) {
    super(name, price, temperature, size);
    this.beans = beans;
    this.milk = milk;
  }
}
