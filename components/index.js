

// Función para manejar el cambio de color del header al hacer scroll
const header = document.getElementById('header');
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuIconOpen = document.getElementById('menu-icon-open');
const menuIconClose = document.getElementById('menu-icon-close');

// Inicializar botón de carrito
document.addEventListener('DOMContentLoaded', () => {
    if (typeof initCartMenuButton === 'function') {
        initCartMenuButton();
    }
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('bg-white', 'shadow-lg');
        header.classList.remove('bg-[#0D1B2A]');
        document.querySelectorAll('#header a').forEach(link => {
            link.classList.remove('text-white');
            link.classList.add('text-black');
        });
    } else {
        header.classList.remove('bg-white', 'shadow-lg');
        header.classList.add('bg-[#0D1B2A]');
        document.querySelectorAll('#header a').forEach(link => {
            link.classList.remove('text-black');
            link.classList.add('text-white');
        });
    }
});

// Función para manejar el menú móvil
menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    menuIconOpen.classList.toggle('hidden');
    menuIconClose.classList.toggle('hidden');
});



