let str = prompt("nhập chuỗi bất kì");
let arr = [];
for (let i = 0; i < str.length; i++) {
  for (let j = i + 1; j <= str.length; j++) {
    arr.push(str.slice(i, j));
  }
}
console.log(arr);
