const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const contrasena = document.getElementById("contrasena");
const confirmar = document.getElementById("confirmar");
const edad = document.getElementById("edad");
const btnEnviar = document.getElementById("btnEnviar");

const errorNombre = document.getElementById("errorNombre");
const errorCorreo = document.getElementById("errorCorreo");
const errorContrasena = document.getElementById("errorContrasena");
const errorConfirmar = document.getElementById("errorConfirmar");
const errorEdad = document.getElementById("errorEdad");

function validar() {
  let todoBien = true;

  // Nombre
  if (nombre.value.length < 3) {
    errorNombre.textContent = "Mínimo 3 letras.";
    todoBien = false;
  } else {
    errorNombre.textContent = "";
  }

  // Correo
  if (!correo.value.includes("@")) {
    errorCorreo.textContent = "Correo no válido.";
    todoBien = false;
  } else {
    errorCorreo.textContent = "";
  }

  // Contraseña
  if (contrasena.value.length < 8) {
    errorContrasena.textContent = "Mínimo 8 caracteres.";
    todoBien = false;
  } else {
    errorContrasena.textContent = "";
  }

  // Confirmación
  if (confirmar.value !== contrasena.value) {
    errorConfirmar.textContent = "No coincide.";
    todoBien = false;
  } else {
    errorConfirmar.textContent = "";
  }

  // Edad
  if (parseInt(edad.value) < 18) {
    errorEdad.textContent = "Debes tener 18 o más.";
    todoBien = false;
  } else {
    errorEdad.textContent = "";
  }

  btnEnviar.disabled = !todoBien;
}

document.getElementById("formulario").addEventListener("input", validar);

document.getElementById("formulario").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Formulario válido ✅");
});
