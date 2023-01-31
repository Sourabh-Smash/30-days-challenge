const form = document.querySelector('#form');
const userName = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
};

const showSuccess = input => {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
};

const checkEmail = input => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
};
const getFieldName = input => {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};

const checkLength = (input, min, max) => {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} must be greater than ${min}`);
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} must be smaller than ${max}`);
  } else {
    showSuccess(input);
  }
};

const checkPasswordMatch = (input1, input2) => {
  if (input1.value !== input2.value) {
    showError(input2, 'Password do not match');
  }
};
const checkRequired = inputArr => {
  inputArr.forEach(element => {
    if (element.value.trim() === '') {
      showError(element, `${getFieldName(element)} is required`);
    } else {
      showSuccess(element);
    }
  });
};

form.addEventListener('submit', e => {
  e.preventDefault();
  checkRequired([userName, email, password, password2]);
  checkLength(userName, 6, 25);
  checkLength(password, 5, 10);
  checkEmail(email);
  checkPasswordMatch(password, password2);
});
