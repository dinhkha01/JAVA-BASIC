class lop {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}
let n = Number(prompt("nhập số lượng sv"));
let sv = [];
for (let i = 0; i < n; i++) {
  let id = prompt("nhập id sv thứ" + (i + 1));
  let name = prompt("nhập tên sv thứ" + (i + 1));
  let allSv = new lop(id, name);
  sv.push(allSv);
}
console.log("danh sách sv đã nhập", sv);
