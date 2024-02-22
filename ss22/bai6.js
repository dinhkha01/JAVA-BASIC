let num = prompt("Nhập vào một số có 4 chữ số:");

if (num.length !== 4 || isNaN(num)) {
  console.log("Vui lòng nhập một số có 4 chữ số.");
} else {
  let thousands = num[0];
  let hundreds = num[1];
  let tens = num[2];
  let ones = num[3];

  console.log("Hàng nghìn: " + thousands);
  console.log("Hàng trăm: " + hundreds);
  console.log("Hàng chục: " + tens);
  console.log("Hàng đơn vị: " + ones);
}
