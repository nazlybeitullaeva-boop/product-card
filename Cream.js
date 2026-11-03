import Product from './Product.js';

export default class Cream extends Product  {
  constructor(name, description, price, composition, skinType) {
    super(name, description, price, composition);
    this.skinType = skinType;
  }
}