const email = document.getElementById('email');
const country = document.getElementById('country');
const postcode = document.getElementById('postcode');
const password = document.getElementById('password');
const emailError = document.getElementById('emailError');
const countryError = document.getElementById('countryError');
const postcodeError = document.getElementById('postcodeError');
const passwordError = document.getElementById('passwordError');
const submit = document.getElementById('submit');

function refresh() {
  email.value = '';
  country.value = '';
  postcode.value = '';
  password.value = '';
}

email.addEventListener('input', () => {
  if (email.validity.valid === false) {
    email.style.color = 'red';
    emailError.style.visibility = 'visible';
  } else {
    email.style.color = 'black';
    emailError.style.visibility = 'hidden';
  }
});

password.addEventListener('input', () => {
  if (password.validity.valid === false) {
    password.style.color = 'red';
    passwordError.style.visibility = 'visible';
  } else {
    password.style.color = 'black';
    passwordError.style.visibility = 'hidden';
  }
});

country.addEventListener('input', () => {
  if (country.validity.valid === false) {
    country.style.color = 'red';
    countryError.style.visibility = 'visible';
  } else {
    country.style.color = 'black';
    countryError.style.visibility = 'hidden';
  }
});

postcode.addEventListener('input', () => {
  if (postcode.validity.valid === false) {
    postcode.style.color = 'red';
    postcodeError.style.visibility = 'visible';
  } else {
    postcode.style.color = 'black';
    postcodeError.style.visibility = 'hidden';
  }
});

submit.addEventListener('click', event => {
  if (
    email.validity.valid === false ||
    country.validity.valid === false ||
    postcode.validity.valid === false ||
    password.validity.valid === false
  ) {
    event.preventDefault();
  } else {
    event.preventDefault();
    const body = document.querySelector('body');
    const highFive = document.createElement('div');
    highFive.textContent = 'HIGH FIVE';
    highFive.style.fontSize = '50pt';
    body.appendChild(highFive);
  }
});

refresh();
