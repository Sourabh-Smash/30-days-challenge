const container = document.querySelector('.container');

const open = document
  .querySelector('#open')
  .addEventListener('click', () => container.classList.add('show-nav'));

const close = document
  .querySelector('#close')
  .addEventListener('click', () => container.classList.remove('show-nav'));
