const panels = document.querySelectorAll('.panel');

const removeAcitveClasses = () => {
  panels.forEach(panel => {
    panel.classList.remove('active');
  });
};

panels.forEach(panel => {
  panel.addEventListener('click', () => {
    removeAcitveClasses();
    panel.classList.add('active');
  });
});
