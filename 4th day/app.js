(function () {
  const buttons = document.querySelectorAll('.counterBtn');
  console.log(buttons);
  const counter = document.querySelector('.counter');

  console.log(counter);
  let count = 0;

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      if (button.classList.contains('prevBtn')) {
        count--;
      } else if (button.classList.contains('nextBtn')) {
        count++;
      }
      counter.textContent = count;
      // console.log(typeof counter.textContent );
      if (counter.textContent > 0) {
        counter.style.color = 'red';
      } else if (counter.textContent < 0) {
        counter.style.color = 'green';
      } else {
        counter.style.color = '#333333';
      }
    });
  });
})();
