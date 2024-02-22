var kg = prompt("Nhập vô cân năng:");
var m = prompt("nhập vô chiều cao: ");
let BMI = kg * (m * m);
if (BMI < 18.5) {
  alert("cân nặng thấp");
} else if (BMI >= 18.5 && BMI <= 24.9) {
  alert("bình thường");
} else if (BMI >= 25) {
  alert("thừa cân");
} else if (BMI >= 25 && BMI <= 29.9) {
  alert("tiền béo");
} else if (BMI >= 30 && BMI <= 34.9) {
  alert("béo I");
} else if (BMI >= 35 && BMI <= 39.9) {
  alert("béo II");
} else if (BMI >= 40) {
  alert("béo II");
}
