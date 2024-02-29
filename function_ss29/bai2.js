var n = Number(prompt("nhập đồ dài mảng"));
var arr = [];
for (var i = 0; i < n; i++) {
  str = prompt("nhập chuỗi kí tự");
  arr.push(str);
}

function timPhanTuDaiNhat(a) {
  var daiNhat = a[0];
  for (var i = 0; i < a.length; i++) {
    if (a[i].length > daiNhat.length) {
      daiNhat = a[i];
    }
  }
  return daiNhat;
}
console.log("phần tử dài nhất là ", timPhanTuDaiNhat(arr));
