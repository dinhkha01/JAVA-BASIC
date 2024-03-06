class Book {
  constructor(title, author, publishedYear) {
    this.title = title;
    this.author = author;
    this.publishedYear = publishedYear;
  }

  displayInfo() {
    return `${this.title}, tác giả: ${this.author}, năm xuất bản: ${this.publishedYear}`;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  displayBooks() {
    return this.books.map((book) => book.displayInfo()).join("\n");
  }
}

let library = new Library();
let book1 = new Book("Sách 1", "Tác giả 1", 2001);
let book2 = new Book("Sách 2", "Tác giả 2", 2002);
library.addBook(book1);
library.addBook(book2);
console.log(library.displayBooks());
