document.addEventListener('DOMContentLoaded', function() {
    console.log('Practice Model loaded.');

    // Animate service items on scroll
    const serviceItems = document.querySelectorAll('.service-item');
    function revealOnScroll() {
        serviceItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                item.classList.add('visible');
            }
        });
    }
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
});
