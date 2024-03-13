function inr() {
  let value = document.getElementById("in").value;

  let out = document.getElementById("out");

  out.textContent = value;
}

document.getElementById("in").addEventListener("input", inr);
