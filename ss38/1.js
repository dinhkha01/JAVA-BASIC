const steps = document.querySelectorAll(".step");
let currentStep = 0;

document.getElementById("next").addEventListener("click", function () {
  if (currentStep < 3) {
    steps[currentStep].classList.remove("active");
    steps[++currentStep].classList.add("active");
    document.getElementById("prev").disabled = false;
    if (currentStep === 3) {
      this.disabled = true;
    }
  }
});

document.getElementById("prev").addEventListener("click", function () {
  if (currentStep > 0) {
    steps[currentStep].classList.remove("active");
    steps[--currentStep].classList.add("active");
    document.getElementById("next").disabled = false;
    if (currentStep === 0) {
      this.disabled = true;
    }
  }
});
