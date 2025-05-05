const cardInput = document.getElementById('cardNumber');
const form = document.getElementById('paymentForm');
const successMessage = document.getElementById('successMessage');


cardInput.addEventListener('input', (e) => {
  let value = e.target.value.replace(/\D/g, '');
  value = value.slice(0, 16);
  const parts = [];

  for (let i = 0; i < value.length; i += 4) {
    parts.push(value.slice(i, i + 4));
  }

  e.target.value = parts.join(' ');
});

form.addEventListener('submit', function(event) {
  event.preventDefault();

  successMessage.style.display = 'block';

  form.style.display = 'none';
});