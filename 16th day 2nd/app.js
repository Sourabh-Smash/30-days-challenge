const body = document.querySelector('body');
const button = body.querySelector('button');
const colors = ['pink', 'red', 'yellow', 'blue', 'green'];

button.addEventListener('click', () => {
  let setColor = parseInt(Math.random() * colors.length);
  body.style.background = colors[setColor];
  button.style.color = colors[setColor];
});
