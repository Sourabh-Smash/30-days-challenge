'use strict';
const btnsShowModel = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const btnCloseModel = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const addModel = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModel = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsShowModel.length; i++)
  btnsShowModel[i].addEventListener('click', addModel);

btnCloseModel.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);

document.addEventListener('keypress', e => {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModel();
  }
});
