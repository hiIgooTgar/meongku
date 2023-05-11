// navbar responsive
const navbar = document.getElementById("click");

function showMenu() {
  click.style.right = "0";
}

function hideMenu() {
  click.style.right = "-230px";
}

// jika klik navbar bagian luar akan hilang
const navList = document.querySelector(".navbar-list");
const ham = document.querySelector("#hamburger");

window.addEventListener("click", function (e) {
  if (!navList.contains(e.target) && !ham.contains(e.target)) {
    click.style.right = "-230px";
  }
});

// navbar sticky
window.addEventListener("scroll", function () {
  var navSticky = document.querySelector(".navbar");
  navSticky.classList.toggle("sticky", this.window.scrollY > 0);
});
