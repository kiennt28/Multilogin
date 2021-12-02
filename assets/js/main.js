window.addEventListener("scroll", function () {
  let header = document.querySelector("nav");
  let windowPosition = window.scrollY > 0;
  header.classList.toggle("sticky", windowPosition);
});

const tabs = document.querySelectorAll(".tab-link");
const panes = document.querySelectorAll(".slick-slide");

const counters = document.querySelectorAll(".number");
const speed = 2000;
console.log(counters);

tabs.forEach(function (tab, index) {
  const pane = panes[index];
  tab.onclick = function () {
    document.querySelector(".tab-link.active").classList.remove("active");
    document.querySelector(".slick-slide.active").classList.remove("active");
    this.classList.add("active");
    pane.classList.add("active");
  };
});
