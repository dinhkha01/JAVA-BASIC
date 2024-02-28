var n = Number(prompt("nhập vào độ dài của mảng"));
var arr = [];
var i;
for (i = 0; i < n; i++) {
  num = Number(prompt(`nhập vào phần tử thứ ${i + 1} của mảng`));
  arr.push(num);
}
if (arr.length > 0) {
  var arrMax = arr[0];
  var arrMin = arr[0];
  for (i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arrMax < arr[j]) {
        arrMax = arr[j];
      } else if (arrMin > arr[j]) {
        arrMin = arr[j];
      }
    }
  }
  console.log("số lớn nhất trong mảng là", arrMax);
  console.log("số nhỏ nhất trong mảng là", arrMin);
} else {
  console.log("Mảng không có phần tử nào.");
}
