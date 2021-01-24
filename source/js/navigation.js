const nav = document.querySelector(".header__navigation");
const navToggle = document.querySelector(".header__menu-button");

nav.classList.toggle("header__navigation--closed");
navToggle.classList.toggle("header__menu-button--closed");

navToggle.addEventListener("click", function () {
  nav.classList.toggle("header__navigation--closed");
  navToggle.classList.toggle("header__menu-button--closed");
});
