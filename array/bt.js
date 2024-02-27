var array = [];
const a = Number(prompt("nhập vào số nguyên dương a"));
const b = Number(prompt("nhập vào số nguyên dương b"));
var ab = 0;
if (isNaN(a) || isNaN(b) || a < 0 || b < 0) {
  alert("sai rồi");
} else {
  for (var i = 1; i <= a; i++) {
    if (i % a === a || i % b === 0) {
      array.push(i);
    }
  }
  console.log(array);
}
