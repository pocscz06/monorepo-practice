const dropdown = document.querySelector('#dropdown');
const closeDropdown = document.querySelector('#dropdown-close');

const navMenu = document.querySelector('.header__nav-list');
const overlay = document.querySelector('.overlay');

dropdown.addEventListener('click', () => {
    navMenu.classList.remove('nav-hidden');
    overlay.classList.remove('overlay-hidden');
})

closeDropdown.addEventListener('click', () => {
    navMenu.classList.add('nav-hidden');
    overlay.classList.add('overlay-hidden');
})