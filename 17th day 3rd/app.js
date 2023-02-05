const inputMessage = document.querySelector('#messageBox');
const button = document.querySelector('#btn');
const errorMessage = document.querySelector('.feedback');
const displayMessage = document.querySelector('.last-message');

button.addEventListener('click', e => {
  e.preventDefault();
  console.log(inputMessage.value);
  if (inputMessage.value === '' || inputMessage.value === ' ') {
    errorMessage.classList.add('active');
    setTimeout(() => {
      errorMessage.classList.remove('active');
    }, 4000);
  } else {
    displayMessage.innerText = inputMessage.value;
    inputMessage.value = '';
  }
});
