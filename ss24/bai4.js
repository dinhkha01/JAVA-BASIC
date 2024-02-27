const number = Number(prompt("Nhập vào một số nguyên dương:"));

if (isNaN(number) || number <= 0) {
  console.log("Vui lòng nhập một số nguyên dương hợp lệ.");
} else {
  let sum = 0;

  console.log(
    "Bình phương của các số nguyên dương chẵn từ 1 sao cho tổng nhỏ hơn",
    number,
    "là:"
  );

  for (let i = 2; number >= sum + i * i; i += 2) {
    console.log(i * i);
    sum += i * i;
  }
}
