var num = prompt("Nhập vào số bất kì");
if (isNaN(num)) {
  alert("không hợp lệ");
} else if (num % 2 == 0) {
  alert("sỗ chẵn");
} else {
  alert("số lẻ");
}
