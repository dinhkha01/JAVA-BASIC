// const a = 10;
// console.log(a);
// const age = Number(prompt("nhập tuổi"));
// const isGamer = confirm("bạn có muốn đi tù");
// if (age > 18) {
//   alert("mày đủ tuổi để đi tù rồi");
// } else {
//   alert("về đợi đủ tuổi đi");
// }
// if (isGamer) {
//   console.log("akdkjsa");
// } else {
//   console.log("asasdsadsa");
// }
// const a = Number(prompt("nhâp vào số điểm"));
// if (a >= 8) {
//   alert("Giỏi");
// } else if (a >= 7) {
//   alert("Khá");
// } else if (a >= 5) {
//   alert("Trung Bình");
// } else {
//   alert("Yếu");
// }

// let inTime = prompt("nhập vào số giờ từ 0 đến 23");
let inTime = new Date().getHours();
let outTime;
if (inTime < 10) {
  outTime = "sáng";
} else if (inTime < 20) {
  outTime = "tốt";
} else if (inTime < 23) {
  outTime = "tối";
}

switch (outTime) {
  case "sáng":
    alert("Good morning");
    break;
  case "tốt":
    alert("Good day");
    break;
  case "tối":
    alert("Good evening");
    break;
  default:
    alert("Giờ không hợp lệ. Vui lòng nhập giờ từ 0 đến 23.");
    break;
}
