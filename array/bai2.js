var n = Number(prompt("nhập vào độ dài của mảng"));
var arr = [];
for (var i = 0; i < n; i++) {
  var num = Number(prompt(`nhập phần tử thứ ${i + 1} của mảng`));
  arr.push(num);
}
var key = Number(prompt("nhập phần tử cần tìm của mảng"));
for (var i = 0; i < arr.length; i++) {
  if (key === arr[i]) {
    console.log("vị trí của số vừa nhập là", +i);
  } else {
    console.log("không tìm thấy số vừa nhập");
  }
}
