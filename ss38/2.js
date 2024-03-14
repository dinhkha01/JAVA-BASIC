function toggleSearch(element) {
  element.classList.toggle("active");
  if (element.classList.contains("active")) {
    element.querySelector('input[type="text"]').focus();
  }
}
