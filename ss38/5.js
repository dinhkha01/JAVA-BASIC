function animateValue(id, start, end, duration) {
  let range = end - start;
  let current = start;
  let increment = end > start ? 1 : -1;
  let stepTime = Math.abs(Math.floor(duration / range));
  let obj = document.getElementById(id);
  let timer = setInterval(() => {
    current += increment;
    obj.textContent = current;
    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);
}

window.onload = function () {
  animateValue("twitter-followers", 0, 12000, 2000);
  animateValue("youtube-subscribers", 0, 5000, 5000);
  animateValue("facebook-fans", 0, 7500, 250);
};
