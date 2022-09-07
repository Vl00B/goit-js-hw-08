import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');

const LOCALSTORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

//

const formData = {};

//

storageCheck();

function onInput(e) {
  formData[email.name] = email.value;
  formData[message.name] = message.value;

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function onSubmit(e) {
  e.preventDefault();
  console.log(formData);
  form.reset();
  localStorage.clear();
}

function storageCheck() {
  const content = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  if (content) {
    email.value = content.email;
    message.value = content.message;
  }
}
