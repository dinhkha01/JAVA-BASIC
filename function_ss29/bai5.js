let n = Number(prompt("nhập độ dài mảng"));
let arr = [];
for (let i = 0; i < n; i++) {
  var str = prompt("nhập vào chuỗi bất kì");
  arr.push(str);
}
function timKiem(arr) {
  let key = prompt("nhập vào chuỗi để tìm kiếm");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == key) {
      console.log("từ khóa tìm kiếm nằm ở vị trí ", i);
    }
  }
}
timKiem(arr);
