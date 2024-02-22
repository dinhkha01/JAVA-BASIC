let a = Number(prompt("nhập độ dài a của tam giác"));
let b = Number(prompt("nhập độ dài b của tam giác"));
let c = Number(prompt("nhập độ dài c của tam giác"));
if (a + b < c || a + c < b || b + c < a) {
  alert("là một tam giác");
} else {
  alert("3 cạnh không phải tam giác");
}
