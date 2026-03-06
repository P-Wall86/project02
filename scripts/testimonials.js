//AUTO FADE
document.addEventListener('DOMContentLoaded', () => {
    const testimonials = document.querySelectorAll('.testimonials-fade .testimonial');
    const container = document.querySelector('.testimonials-fade');
    let current = 0;
    let testimonialInterval;

    function showNext() {
        if (testimonials.lenght <= 1) return;

        testimonials[current].classList.remove('active');

        current = (current + 1) % testimonials.length;

        testimonials[current].classList.add('active');
    }

    testimonialInterval = setInterval(showNext, 8000);

    if (container) {
        container.addEventListener('mouseenter', () => {
            clearInterval(testimonialInterval);
        });

        container.addEventListener('mouseleave', () => {
            testimonialInterval = setInterval(showNext, 8000);
        })
    }
});
