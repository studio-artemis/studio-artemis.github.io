document.addEventListener('DOMContentLoaded', () => {
    const hexagons = document.querySelectorAll('.hexagon');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    hexagons.forEach(hexagon => {
        hexagon.style.opacity = '0';
        hexagon.style.transform = 'translateY(50px)';
        hexagon.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(hexagon);
    });
});
