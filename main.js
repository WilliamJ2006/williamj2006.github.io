import { postForm } from './fetch-helpers.js';

const form = document.querySelector('form');
const submitButton = document.querySelector('.submit-button');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const formValues = {
    name: formData.get(`name`),
    email: formData.get(`email`),
    inquiry: formData.get('inquiry'),
  };
  const data = await postForm(formValues);
  if (data.error) {
    submitButton.textContent = 'Failed to submit.';
    return;
  }
  submitButton.textContent = 'Thank You for Submitting!';
  form.reset();
});
