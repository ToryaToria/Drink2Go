// source/scripts/mobil-menu.js
var btnMob = document.querySelector(".js-toggle-button");
var menuMob = document.querySelector(".nav__list");
var onClickBtn = () => {
  btnMob.classList.toggle("js-toggle-button--closer");
  menuMob.classList.toggle("hidden");
};
btnMob.addEventListener("click", onClickBtn);
//# sourceMappingURL=mobil-menu.js.map
