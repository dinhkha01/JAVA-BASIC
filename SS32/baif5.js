class Book {
  constructor(author, name) {
    this.author = author;
    this.name = name;
  }
}
let n = Number(prompt("Nhập vào độ dài của kho sách"));
let books = [];
for (var i = 0; i < n; i++) {
  let author = prompt("Mời nhập tác giả ");
  let name = prompt("Nhập tên sách");
  let book = new Book(author, name);
  books.push(book);
}
console.log(books);
let key = prompt("Tên sách muốn tìm");
let found = false;
for (var i = 0; i < books.length; i++) {
  if (books[i].name === key) {
    console.log("Sách đã tìm thấy", books[i]);
    found = true;
  }
}
if (!found) {
  console.log("Không tìm thấy sách");
}
