import B from "./Book.js";


export default class EBook extends Book {
  constructor(author, title, fileSize) {
    super(author, title);
    this.fileSize = fileSize;
  }
}