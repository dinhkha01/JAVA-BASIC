class Book {
  constructor(title, author, publishedYear, isAvailable = true) {
    this.title = title;
    this.author = author;
    this.publishedYear = publishedYear;
    this.isAvailable = isAvailable;
  }

  borrow() {
    if (this.isAvailable) {
      this.isAvailable = false;
      return `${this.title} đã được mượn.`;
    } else {
      return `${this.title} hiện không có sẵn để mượn.`;
    }
  }

  returnBook() {
    this.isAvailable = true;
    return `${this.title} đã được trả.`;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  isBookAvailable(title) {
    const book = this.books.find((book) => book.title === title);
    return book ? book.isAvailable : "Sách này không có trong thư viện.";
  }
}

let library = new Library();
let book1 = new Book("Sách 1", "Tác giả 1", 2001);
let book2 = new Book("Sách 2", "Tác giả 2", 2002);
library.addBook(book1);
library.addBook(book2);

console.log(book1.borrow());
library.isBookAvailable("Sách 1");
console.log(book1.returnBook());
console.log(library.isBookAvailable("Sách 1"));
