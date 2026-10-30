import { Drink } from './Drink.js';

export class Tea extends Drink {
  constructor(name, price, temperature, size, color, countryOfOrigin) {
    super(name, price, temperature, size);
    this.color = color;
    this.countryOfOrigin = countryOfOrigin;
  }
}
