document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('explore');
    button.addEventListener('click', () => {
        alert('Exploring the peak experience!');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.fullscreen');
        hero.style.backgroundPositionY = `${window.scrollY * 0.5}px`;
    });
});