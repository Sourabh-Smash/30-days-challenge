const counter = document.querySelector('.counter');
const buttons = document.querySelectorAll('.counterBtn');
let count = 0;
buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('lowerBtn')) {
      count--;
    } else {
      count++;
    }
    counter.innerText = count;
    if (counter.innerText > 0) {
      counter.style.color = 'green';
    } else if (counter.innerText < 0) {
      counter.style.color = 'red';
    } else {
      counter.style.color = 'black';
    }
  });
});
