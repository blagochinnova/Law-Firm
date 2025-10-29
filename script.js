const burger = document.getElementById("burger");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

burger.addEventListener("click", () => {
  sidebar.classList.add("active");
  overlay.classList.add("active");
});

overlay.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
});
const closeBtn = document.getElementById("closeBtn");

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
});
