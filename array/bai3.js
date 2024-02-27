var n = Number(prompt("nhập vào độ dài của mảng "));
var arr = [];
var i;
for (i = 0; i < n; i++) {
  var num = Number(prompt(`nhập phần tử thứ ${i + 1} của mảng`));
  arr.push(num);
}
var key = Number(prompt("nhập số cần tìm"));
var l = 0;
for (i = 0; i < arr.length; i++) {
  if (key === arr[i]) {
    l++;
  }
}
console.log("số lần xuất hiện là ", l);
