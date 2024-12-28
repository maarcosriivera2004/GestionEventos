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
