var chuoi = prompt("Nhập vào chuỗi");
var arr = [];
for (var i = 0; i < chuoi.length; i++) {
  for (var j = 1; j <= chuoi.length; j++) {
    arr.push(chuoi.slice(i, j));
  }
}
console.log(arr);
