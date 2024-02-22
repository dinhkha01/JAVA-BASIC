var a = Number(prompt("nhập vào số a:"));
var b = Number(prompt("nhập vào số b:"));
var ab = a / b;
var ba = b / a;
if (a % b == 0) {
  console.log(ab);
} else if (b % a == 0) {
  console.log(ba);
}
