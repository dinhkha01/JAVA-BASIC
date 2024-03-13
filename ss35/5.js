function mau(out, item) {
  if (item !== " ") {
    out.style.background = "white";
  } else {
    out.style.backgroundColor = "yellow";
  }
}

function add() {
  let out = document.getElementById("value");
  let item = out.value;

  if (item) {
    let ul = document.getElementById("out");
    let inr = document.createElement("li");
    inr.appendChild(document.createTextNode(item));
    ul.appendChild(inr);
    out.value = "";

    mau(out, item);
  }
}
