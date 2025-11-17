// =====================================
// VAMA9 - MENU PAGE JAVASCRIPT
// Menu-specific functionality
// =====================================

// Smooth scroll for category links
document.querySelectorAll('.cat-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 140;
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Sticky category nav
window.addEventListener('scroll', function() {
    const nav = document.getElementById('categoryNav');
    if (nav && window.scrollY > 100) {
        nav.classList.add('sticky');
    } else if (nav) {
        nav.classList.remove('sticky');
    }
});
