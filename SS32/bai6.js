class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = parseFloat(price);
  }
}
let n = Number(prompt("Nhập vào độ dài product "));
let dt = [];
for (let i = 0; i < n; i++) {
  let id = prompt("Nhập id");
  let name = prompt("Nhập tên");
  let price = prompt("Nhập giá");
  let product = new Product(id, name, price);
  dt.push(product);
}

dt.sort((a, b) => a.price - b.price);
console.log("Đã xắp xếp", dt);
