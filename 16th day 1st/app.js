const buttons = document.querySelectorAll('.btn');
const images = document.querySelectorAll('.image-box');
const headingName = document.querySelector('h1');

buttons.forEach(button => {
  button.addEventListener('click', e => {
    e.preventDefault();
    let filter = e.target.dataset.filter;

    images.forEach(image => {
      if (filter === 'All') {
        image.style.display = 'block';
        headingName.innerText = `Select Your Options`;
      } else {
        if (image.classList.contains(filter)) {
          image.style.display = 'block';
          headingName.innerText = `Select Your ${filter}`;
        } else {
          image.style.display = 'none';
        }
      }
    });
  });
});
