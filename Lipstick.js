import Product from "./Product.js";


export default class Lipstick extends Product {
  constructor(name, description, price, composition, color) {
    super(name, description, price, composition);
    this.color = color;
  }
}