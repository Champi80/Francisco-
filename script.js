// Seleccionamos el botón de hamburguesa y el contenedor de los enlaces
const botonMenu = document.querySelector('.menu-movil');
const enlacesNav = document.querySelector('.nav-links');

// Escuchamos el clic en el botón para activar o desactivar el menú
botonMenu.addEventListener('click', () => {
    enlacesNav.classList.toggle('activo');
});