document.addEventListener("DOMContentLoaded", function() {
    
    // Advanced Intersection Observer Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal-left, .reveal-right, .fade-up');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 80;

        revealElements.forEach((el) => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - revealPoint) {
                el.classList.add('active-reveal');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    
    // Trigger on load
    revealOnScroll();
});