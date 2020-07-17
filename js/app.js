const menuBurguer = document.querySelector(".menu-burguer");
const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav-menu");
const menuClose = document.querySelector(".menu-close");

menuBurguer.addEventListener("click", function () {
  nav.classList.add("menu");
});

menuClose.addEventListener("click", function () {
  nav.classList.remove("menu");
});
