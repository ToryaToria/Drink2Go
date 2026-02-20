const btnMob = document.querySelector('.js-toggle-button');

const menuMob = document.querySelector('.nav__list');

const onClickBtn = () => {
  btnMob.classList.toggle('js-toggle-button--closer');
  menuMob.classList.toggle('hidden');
};

btnMob.addEventListener('click', onClickBtn);
