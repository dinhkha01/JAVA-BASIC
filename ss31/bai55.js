function chunkArrayInGroups(arr, n) {
  var result = [];
  while (arr.length) {
    result.push(arr.splice(0, n));
  }
  return result;
}
let n = Number(prompt("nhập vào phần n"));
var result = chunkArrayInGroups([1, 2, 3, 4, 5, 6, 7, 8, 9], n);
console.log("Cac mang gom" + n + " phan tu", result);
