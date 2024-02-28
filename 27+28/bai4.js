var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var arrC = [];
var arrL = [];
console.log("mảng ban đầu là", arr);
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    arrC.push(arr[i]);
  } else {
    arrL.push(arr[i]);
  }
}
console.log("mảng chẵn là", arrC);
console.log("mảng lẻ là", arrL);
