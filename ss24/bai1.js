const number = Number(prompt("Nhập vào một số nguyên dương:"));

if (isNaN(number) || number <= 0) {
  alert("Vui lòng nhập một số nguyên dương hợp lệ.");
} else {
  console.log(
    "Bình phương của các số nguyên dương chẵn từ 1 đến",
    number,
    "là:"
  );
  for (let i = 2; i <= number; i += 2) {
    console.log(i ** 2);
  }
}
