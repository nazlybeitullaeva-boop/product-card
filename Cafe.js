export class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
  getInfo() {
    console.log(`Cafe: ${this.name}, Location: ${this.location}`);
  }
  orderDrink(drink) {
  drink.serve();
}
}