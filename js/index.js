/*declaramos dos objetos y obtendermos el primer elemento del documento con la clase del css*/
const navToggle = document.querySelector(".navbar-toggler");
const navMenu = document.querySelector(".navbar-nav");

/*le agregamos un escuchador y le indicamos que nos oculte el menu de inicio en la hamburguesa*/
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("navbar-menu_visible");
});
