const btnMob = document.querySelector('.hamburger');

const menuMob = document.querySelector('#nav__list');

const onClickBtn = () => {
  btnMob.classList.toggle('hamburger--closer');
  menuMob.classList.toggle('hidden');
  console.log('ку')
}


btnMob.addEventListener('click', onClickBtn);