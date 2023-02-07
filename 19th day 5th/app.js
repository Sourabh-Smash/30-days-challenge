const imgContainer = document.querySelector('.img-container');
const buttons = document.querySelectorAll('.btn');
const imgArray = ['1', '2', '3', '4'];
let counter = 0;

const getBackgroundImgage = index =>
  (imgContainer.style.background = `url(imgs/${imgArray[index]}.svg) center/cover fixed no-repeat`);

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('btn-left')) {
      counter--;
      if (counter < 0) {
        counter = imgArray.length - 1;
        console.log(counter);
      }
      getBackgroundImgage(counter);
    }
    if (button.classList.contains('btn-right')) {
      counter++;
      if (counter > imgArray.length - 1) {
        counter = 0;
      }
      getBackgroundImgage(counter);
    }
  });
});
