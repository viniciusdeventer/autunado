const menuToggle = document.getElementById('menu-toggle');
const menuNav = document.querySelector('.menuNav');

menuToggle.addEventListener('click', () => {
    menuNav.classList.toggle('active'); 
});

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});