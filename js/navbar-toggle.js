const navbar = document.getElementById("navbar");
const toggleBtn = document.getElementById("toggle-navbar");

let isOpen = true;

toggleBtn.addEventListener("click", () => {
  isOpen = !isOpen;

  if (isOpen) {
    navbar.classList.remove("-translate-y-full");
    toggleBtn.textContent = "☰";
  } else {
    navbar.classList.add("-translate-y-full");
    toggleBtn.textContent = "✕";
  }
});
