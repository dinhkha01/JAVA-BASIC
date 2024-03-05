class Users {
  constructor(id, name, email, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

let user = [];
let id = prompt("Nhập vào id");
let name;
do {
  name = prompt("Nhập tên (trên 3 kí tự)");
} while (name.length < 3 || name == " ");
