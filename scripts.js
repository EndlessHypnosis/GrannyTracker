

var navBtn = document.querySelector(".hamburger-nav");
var mainNav = document.querySelector("#main-nav");


navBtn.addEventListener("click", toggleNav);

function toggleNav() {
  mainNav.classList.toggle('ham-show');
  mainNav.classList.toggle('ham-hide');
}