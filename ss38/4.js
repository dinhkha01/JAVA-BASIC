const jokes = [
  "joke" +
    ":" +
    "All vampires keep their money in a special place—the blood bank.",
  "joke" +
    ":" +
    "What do you call someone who can’t stick to a diet? A desserter.",
];
function newJoke() {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  document.getElementById("joke").innerText = jokes[randomIndex];
  document.body.style.backgroundColor = `hsl(${
    Math.random() * 360
  }, 100%, 75%)`;
}
