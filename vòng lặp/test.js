var num;
var sum = 0;
do {
  num = Number(prompt("nhập vào số nguyên dương"));
  if (!isNaN(num) && num > 0) {
    sum += num;
  } else {
    break;
  }
} while (true);
console.log("tổng các số nguyên dương đã nhập là ", sum);
