function vietHoaChuCaiDau(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word.replace(word[0], word[0].toUpperCase());
    })
    .join(" ");
}

let s = "xin chào. tôi là bạn";
let result = vietHoaChuCaiDau(s);

console.log("Chuỗi sau khi viết hoa chữ cái đầu: " + result);
