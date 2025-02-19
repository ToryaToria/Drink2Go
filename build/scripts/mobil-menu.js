// source/scripts/mobil-menu.js
var btnMob = document.querySelector(".hamburger");
var menuMob = document.querySelector("#nav__list");
var onClickBtn = () => {
  btnMob.classList.toggle("hamburger--closer");
  menuMob.classList.toggle("hidden");
  console.log("\u043A\u0443");
};
btnMob.addEventListener("click", onClickBtn);
//# sourceMappingURL=mobil-menu.js.map
