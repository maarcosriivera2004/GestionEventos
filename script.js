document.addEventListener('DOMContentLoaded', () => {
  const userIcon = document.querySelector('#user-icon');
  const userOption = document.querySelector('#user-option');  // Selecciona el contenedor que envuelve el icono y el dropdown
  const hamburguer = document.querySelector('#hamburguer');
  const navLinks = document.querySelector('#nav-links');

  // Evento para mostrar/ocultar el dropdown del usuario
  userIcon.addEventListener('click', () => {
    console.log("Clic en el icono de usuario"); // Verifica que el evento se activa
    userOption.classList.toggle('show-dropdown');  // Cambia la clase en el contenedor
  });

  // Evento para mostrar/ocultar el menú hamburguesa
  hamburguer.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
  

  
});

const container = document.querySelector(".container"),
  pwShowHide = document.querySelectorAll(".showHidePw"),
  pwFields = document.querySelectorAll(".password"),
  signUp = document.querySelector(".signup-link"),
  login = document.querySelector(".login-link");

// js code to show/hide password and change icon
pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    pwFields.forEach((pwField) => {
      if (pwField.type === "password") {
        pwField.type = "text";

        pwShowHide.forEach((icon) => {
          icon.classList.replace("uil-eye-slash", "uil-eye");
        });
      } else {
        pwField.type = "password";

        pwShowHide.forEach((icon) => {
          icon.classList.replace("uil-eye", "uil-eye-slash");
        });
      }
    });
  });
});

// js code to appear signup and login form
signUp.addEventListener("click", (e) => {
  e.preventDefault();
  container.classList.add("active");
});

login.addEventListener("click", (e) => {
  e.preventDefault();
  container.classList.remove("active");
});
