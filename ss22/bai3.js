var year = Number(prompt("nhập vào năm"));
if ((year % 100 !== 0 && year % 4 === 0) || year % 400 === 0) {
  alert("là năm nhuận");
} else {
  alert("không là năm nhuận");
}
