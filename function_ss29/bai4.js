let a = prompt("nhập vào chuỗi kí tự");
let k = prompt("nhập vào kí tự muốn tìm");
function kiTu(a, k) {
  var dem = 0;
  for (var i = 0; i <= a.length; i++) {
    if (a[i] === k) {
      dem++;
    }
  }
  return dem;
}
console.log(k, "xuất hiện", kiTu(a, k) + "lần");
