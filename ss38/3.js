window.onload = function () {
  var backgroundImage = document.getElementById("background-image");
  var loadingText = document.getElementById("loading-percentage");
  var percentage = 0;
  var interval = setInterval(function () {
    percentage++;
    loadingText.textContent = percentage + "%";
    backgroundImage.style.opacity = percentage / 100;
    if (percentage >= 100) {
      clearInterval(interval);
      loadingText.style.display = "none";
    }
  }, 60); // Điều chỉnh tốc độ tăng phần trăm ở đây
};
