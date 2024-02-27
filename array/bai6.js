var n = Number(prompt("nhập vào độ dài của mảng"));
var arr = [];
var i;
for (i = 0; i < n; i++) {
  var num = Number(prompt(`nhập vào phần tử thứ ${i + 1} của mảng:`));
  arr.push(num);
}
var arr1 = [];
for (i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    arr1.push(arr[i]);
  } else {
    arr1.unshift(arr[i]);
  }
}
console.log(arr1);
