let n = Number(prompt("nhập vào độ dài của mảng"));
let arr = [];
function inArr(n) {
  for (var i = 0; i < n; i++) {
    num = Number(prompt(` nhập vào phần tử thứ ${i + 1} của mảng`));
    arr.push(num);
  }
}
inArr(n);

arr.sort((a, b) => a - b);

function timTamGiac(arr) {
  let dem = 0;
  for (var i = 0; i < arr.length - 2; i++) {
    let tem = i + 2;
    for (var j = i + 1; j < arr.length; j++) {
      while (tem < arr.length && arr[i] + arr[j] > arr[tem]) {
        console.log("mảng tạo tam giác là", arr[i], arr[j], arr[tem]);
        tem++;
      }
      dem += tem - j - 1;
    }
  }
  return dem;
}

console.log(
  "Số lượng tam giác có thể tạo thành từ mảng là: " + timTamGiac(arr)
);

// function xetTamGiac(arr) {
//   var dem = 0;
//   for (var i = 0; i < arr.length - 2; i++) {
//     for (var j = i + 1; j < arr.length - 1; j++) {
//       for (var h = j + 1; h < arr.length; h++) {
//         if (
//           arr[i] + arr[j] > arr[h] &&
//           arr[i] + arr[h] > arr[j] &&
//           arr[h] + arr[j] > arr[i]
//         ) {
//           console.log("mảng tạo tam giác là", arr[i], arr[j], arr[h]);
//           dem++;
//         }
//       }
//     }
//   }
//   return dem;
// }

// inArr(n);
// console.log("số tam giác có thể tạo là", xetTamGiac(arr));
