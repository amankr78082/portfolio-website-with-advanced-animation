document.addEventListener('DOMContentLoaded', () => {
    // GSAP animation for header
    gsap.from('header', { duration: 1, y: -50, opacity: 0 });

    // GSAP animation for sections
    gsap.from('section', {
        scrollTrigger: {
            trigger: 'section',
            start: 'top 80%',
            end: 'bottom 60%',
            toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.3
    });
});
