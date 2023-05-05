const form = document.querySelector('form');

form.addEventListener('submit', (event) => {

  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username.trim() === '' || password.trim() === '') {
    alert('Por favor ingrese un usuario y una contraseña válidos');
    return;
  }

  fetch('/login', {
    method: 'POST',
    body: JSON.stringify({
      username,
      password
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Credenciales inválidas');
    }

    window.location.href = '/inicio';
  })
  .catch(error => {
    alert(error.message);
  });
});
window.addEventListener('load', () => {
  document.getElementById('username').focus();
});