import { Drink } from './Drink.js';

export class Lemonade extends Drink {
  constructor(name, price, temperature, size, ingredients, color) {
    super(name, price, temperature, size);
    this.ingredients = ingredients;
    this.color = color; 

  }
}
