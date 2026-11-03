export class Drink {
  #temperature;

  constructor(name, price, temperature, size) {
    this.name = name;
    this.price = price;
    this.#temperature = temperature;
    this.size = size;
  }
  getInfo() {
    console.log(`Drink: ${this.name}, Price: ${this.price}, Temperature: ${this.#temperature}, Size: ${this.size}`);
  }

  getTemperature() {
    return this.#temperature;
  }

  setTemperature(temp) {
    this.#temperature = temp;
  }

  #prepare() {
    console.log(`Preparing ${this.name}...`);
  }

  serve() {
    this.#prepare();
    console.log(`Serving ${this.name} at ${this.#temperature} degrees.`);
  }
}
