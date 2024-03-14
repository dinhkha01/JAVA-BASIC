// Lưu một giá trị đơn giản dưới dạng chuỗi
localStorage.setItem("name", "kha");

// Tạo một đối tượng và lưu nó dưới dạng chuỗi JSON
let ten = { name: "Hà", age: 18 };
localStorage.setItem("ten", JSON.stringify(ten));

// Truy xuất và chuyển đổi chuỗi JSON trở lại thành đối tượng
let lay = JSON.parse(localStorage.getItem("ten"));
console.log(lay);
