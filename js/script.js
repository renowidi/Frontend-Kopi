// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');

// Apabila menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};