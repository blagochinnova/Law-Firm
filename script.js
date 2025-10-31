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

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#practice-slider", {
    type: "loop",
    perPage: 3,
    gap: "2rem",
    breakpoints: {
      1024: { perPage: 2 },
      640: { perPage: 1 },
    },
    autoplay: true,
    pauseOnHover: true,
    pagination: false,
    arrows: true,
  }).mount();
});
