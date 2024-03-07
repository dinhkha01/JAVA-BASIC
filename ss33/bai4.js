class Book {
  constructor(title, author, publishedYear) {
    this.title = title;
    this.author = author;
    this.publishedYear = publishedYear;
  }
  get outBook() {
    return `${this.title} ${this.author} ${this.publishedYear}`;
  }
}
class Library {
  constructor() {
    this.books = [];
  }
  addBook(book) {
    this.books.push(book);
  }
  hienSach() {
    for (let i = 0; i < this.books.length; i++) {
      console.log(`sách ${i + 1} : ${this.books[i].outBook} `);
    }
  }
}

let myLibrary = new Library();
let n;
do {
  let title = prompt("nhập vào tiêu đề sách");
  let author = prompt("nhập vào tác giả của sách");
  let publishedYear = prompt("nhập vào năm xuất bản");
  let book = new Book(title, author, publishedYear);
  myLibrary.addBook(book); // Thêm sách vào thư viện
  n = Number(prompt("tiếp tục(nhập số 1)|| dừng lại (nhập số 2)"));
} while (n === 1);
let book1 = new Book("HuHu", "Tâm Anh", "1900");
myLibrary.addBook(book1);
console.log(myLibrary.hienSach());
