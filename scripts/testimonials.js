//AUTO FADE
document.addEventListener('DOMContentLoaded', () => {
    const testimonials = document.querySelectorAll('.testimonials-fade .testimonial');
    let current = 0;

    function showNext() {
        testimonials[current].classList.remove('active');
        current = (current + 1) % testimonials.length;
        testimonials[current].classList.add('active');
    }

    setInterval(showNext, 8000);
});
