function changeBackground(input) {
  input.style.backgroundColor = "white";
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

    out.style.backgroundColor = "yellow";
  }
}
