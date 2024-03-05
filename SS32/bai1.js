class information {
  constructor(id, name, phone, address) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.address = parseFloat(address);
  }
}
let n = Number(prompt("nhập vào số lượng của information"));
let arr = [];
for (var i = 0; i < n; i++) {
  let id = prompt("mời nhập id");
  let name = prompt("nhập tên");
  let phone = prompt("nhập tên đt");
  let address = prompt("nhập giá");
  let Information = new information(id, name, phone, address);
  arr.push(Information);
}
console.log(arr);
