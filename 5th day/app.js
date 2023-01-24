(function () {
  const pictures = ['1', '2', '3', '4'];
  console.log(pictures.length);
  const imgDiv = document.querySelector('.img-container');
  const buttons = imgDiv.querySelectorAll('.btn');
  console.log(buttons);
  console.log(imgDiv);

  let counter = 0;
  buttons.forEach(button => {
    button.addEventListener('click', e => {
      if (button.classList.contains('btn-left')) {
        counter--;
        if (counter < 0) {
          counter = pictures.length - 1;
        }
        imgDiv.style.background = `url(imgs/${pictures[counter]}.svg) center/cover fixed no-repeat`;
      }

      if (button.classList.contains('btn-right')) {
        counter++;
        if (counter > pictures.length - 1) {
          counter = 0;
        }
        imgDiv.style.background = `url(imgs/${pictures[counter]}.svg) center/cover fixed no-repeat`;
      }
    });
  });
})();
