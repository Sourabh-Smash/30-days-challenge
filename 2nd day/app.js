const btn = document.querySelector('button');
const body = document.querySelector('body');
const colours = ['red', 'blue', 'pink', 'green'];

btn.addEventListener('click', () => {
  const colorIndex = parseInt(Math.random() * colours.length);
  console.log(colorIndex);
  body.style.backgroundColor = colours[colorIndex];
  btn.innerHTML = colours[colorIndex];
  btn.style.color = colours[colorIndex];
});
