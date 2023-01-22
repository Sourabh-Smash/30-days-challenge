(function () {
  // const form = document.querySelector('.message-form');
  const message = document.querySelector('#message');
  const feedback = document.querySelector('.feedback');
  const messageContent = document.querySelector('.message-content');
  const btn = document.querySelector('#submitBtn');

  btn.addEventListener('click', e => {
    e.preventDefault();
    if (message.value === ''|| message.value===' ') {
      feedback.classList.add('show');
      setTimeout(() => {
        feedback.classList.remove('show');
      }, 4000);
    } else {
      messageContent.textContent = message.value;
      message.value = '';
    }
  });
})();
