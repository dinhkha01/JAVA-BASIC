var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("mảng ban đầu", arr);
for (var i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    arr.splice(i, 1);
    i--;
  }
}
console.log("mảng sau khi ", arr);
