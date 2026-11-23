export default class Book {
  constructor(author, title) {
    this.author = author;
    this.title = title;
  }
 getInfo() {
    console.log(`Author: ${this.author}, Title: ${this.title  }`);
  }}
