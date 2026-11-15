  const form = document.getElementById('formContacto');

  form.addEventListener('submit', function (e) {
    if (!form.checkValidity()) {
      e.preventDefault();
    }
    form.classList.add('was-validated');
  });
