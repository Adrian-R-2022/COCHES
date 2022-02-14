/*declaramos dos objetos y obtendermos el primer elemento del documento con la clase del css*/
const navToggle = document.querySelector(".navbar-toggle");
const navMenu = document.querySelector(".navbar-menu");

/*le agregamos un escuchador y le indicamos que nos oculte el menu de inicio en la hamburguesa*/
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("navbar-menu_visible");
});
