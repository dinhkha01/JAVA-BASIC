let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let num = parseInt(prompt("Nhập vào một số nguyên: "));

function timCapSo(arr, num) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    let complement = num - arr[i];
    if (map[complement] !== undefined) {
      return [complement, arr[i]];
    }
    map[arr[i]] = i;
  }
  return null;
}

let capSo = timCapSo(arr, num);
if (capSo) {
  console.log("Cặp số có tổng bằng số đã nhập là: ", capSo);
} else {
  console.log("Không tìm thấy cặp số nào có tổng bằng số đã nhập.");
}
