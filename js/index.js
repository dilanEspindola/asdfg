const body = document.querySelector("body");
const nav = document.querySelector("nav");
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const headerLogo = document.querySelector(".header__logo");

openMenu.addEventListener("click", () => {
  nav.style.marginLeft = "0";
  headerLogo.style.display = "none";
  openMenu.style.display = "none";
});

closeMenu.addEventListener("click", () => {
  nav.style.marginLeft = "-700px";
  headerLogo.style.display = "block";
  openMenu.style.display = "block";
});

const marker = document.querySelector("#marker");
const items = document.querySelectorAll(".nav__features a");
const tabs = document.querySelectorAll(".features__tabs .show-tab");

// window.addEventListener("DOMContentLoaded", () => {

// });

items.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (index === 0) {
      tabs[0].style.display = "block";
      tabs[1].classList.remove("active-tab");
      tabs[2].classList.remove("active-tab");
    }
    if (index === 1) {
      tabs[1].classList.add("active-tab");
      tabs[0].style.display = "none";
      tabs[2].classList.remove("active-tab");
    }
    if (index === 2) {
      tabs[2].classList.add("active-tab");
      tabs[0].style.display = "none";
      tabs[1].classList.remove("active-tab");
    }
  });
});

function indicador(e) {
  marker.style.left = e.offsetLeft + "px";
  marker.style.width = e.offsetWidth + "px";
}

items.forEach((item) => {
  item.addEventListener("click", (e) => {
    indicador(e.target);
  });
});
