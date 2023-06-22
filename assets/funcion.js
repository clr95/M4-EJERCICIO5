document.getElementById('enviar').addEventListener('click', function(event) {
  event.preventDefault();

  var nombre = document.getElementById('nombre').value;
  var correo = document.getElementById('correo').value;
  var trabajo = document.getElementById('trabajo').value;
  var telefono = document.getElementById('telefono').value;
  var sobreTi = document.getElementById('sobreTi').value;

  if (nombre === '' || correo === '' || trabajo === '' || telefono === '' || sobreTi === '') {
    alert('Por favor, complete todos los campos del formulario.');
    return;
  }

  var correoRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!correoRegExp.test(correo)) {
    alert('Por favor, ingrese un correo electrónico válido.');
    return;
  }


  var telefonoRegExp = /^\d{9}$/;
  if (!telefonoRegExp.test(telefono)) {
    alert('Por favor, ingrese un número de teléfono válido (11 dígitos).');
    return;
  }



  document.querySelector('.contenedor2').classList.remove('d-none');

  document.getElementById('name').textContent = nombre;
  document.getElementById('work').textContent = trabajo;
  document.getElementById('mail').textContent = correo;
  document.getElementById('phone').textContent = telefono;
  document.getElementById('about').textContent = sobreTi;


  document.getElementById('nombre').value = '';
  document.getElementById('correo').value = '';
  document.getElementById('trabajo').value = '';
  document.getElementById('telefono').value = '';
  document.getElementById('sobreTi').value = '';
});