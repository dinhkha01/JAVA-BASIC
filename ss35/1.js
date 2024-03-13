function nhap() {
  let inn = document.getElementById("in").value;
  if (inn.length >= 10) {
    alert("không hợp lẹ");
  } else {
    alert("hợp lệ");
  }
}
