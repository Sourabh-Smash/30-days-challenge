const progress = document.querySelector('#progress');
const circles = document.querySelectorAll('.circle');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
let counter = 1;

const update = () => {
  circles.forEach((circle, idx) => {
    if (counter > idx) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });
  const actives = document.querySelectorAll('.active');
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%';
  if (counter === 1) {
    prevBtn.disabled = true;
  } else if (counter === circles.length) {
    nextBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }
};
prevBtn.addEventListener('click', () => {
  counter--;
  if (counter < 1) {
    counter = 1;
  }
  update();
});
nextBtn.addEventListener('click', () => {
  counter++;
  if (counter > circles.length) {
    counter = circles.length;
  }
  update();
});
